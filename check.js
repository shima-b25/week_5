// Run: node check.js. Verifies questions, exhaustive scoring, and that PROFILES match the Guide.
const fs = require("fs"), vm = require("vm"), assert = require("assert");
const html = fs.readFileSync(__dirname + "/index.html", "utf8");
const md = fs.readFileSync(__dirname + "/framework.md", "utf8");

const logic = html.split("// BEGIN LOGIC")[1].split("// END LOGIC")[0].replace(/^[^\n]*\n/, ""); // drop the rest of the marker line
const { DIMENSIONS, QUESTIONS, PROFILES, pickProfile, lowestDimensions } =
  vm.runInNewContext(logic + "\n({ DIMENSIONS, QUESTIONS, PROFILES, pickProfile, lowestDimensions })");

// 1. Questions: 20, four per dimension, five options each, unique ids.
assert.equal(QUESTIONS.length, 20);
assert.equal(new Set(QUESTIONS.map(q => q.id)).size, 20);
DIMENSIONS.forEach((_, i) => assert.equal(QUESTIONS.filter(q => q.dim === i).length, 4, "dim " + i));
QUESTIONS.forEach(q => assert.equal(q.options.length, 5, q.id));
console.log("questions ok: 20 questions, 4 per dimension, 5 options each");

// 2. Exhaustive scoring: every possible score vector (17 values per dimension) gets a documented profile.
const vals = Array.from({ length: 17 }, (_, i) => 1 + i * 0.25);
const counts = {};
let total = 0;
const idx = [0, 0, 0, 0, 0];
for (;;) {
  const scores = {};
  DIMENSIONS.forEach((d, i) => { scores[d.name] = vals[idx[i]]; });
  const key = pickProfile(scores);
  assert(PROFILES[key], "undocumented profile " + key);
  const owner = DIMENSIONS.find(d => d.profile === key);
  if (owner) assert(lowestDimensions(scores).includes(owner.name), `${key} names ${owner.name}, not a lowest dimension`);
  counts[key] = (counts[key] || 0) + 1;
  total++;
  let k = 0;
  while (k < 5 && ++idx[k] === 17) idx[k++] = 0;
  if (k === 5) break;
}
assert.equal(total, 17 ** 5);
Object.keys(PROFILES).forEach(k => assert(counts[k], k + " is never reached"));
console.log(`scoring ok: all ${total} score vectors map to a documented profile`, counts);

const all = v => Object.fromEntries(DIMENSIONS.map(d => [d.name, v]));
assert.equal(pickProfile(all(2)), "earlyStage");
assert.equal(pickProfile(all(4)), "connected");
assert.equal(pickProfile(all(3)), "steadyMiddle");

// 3. Guide matches PROFILES word for word, and is short enough for one page.
const guide = md.split("## Interpretation Guide")[1];
assert(guide, "Guide section missing");
for (const [k, p] of Object.entries(PROFILES))
  for (const f of ["name", "pattern", "body", "action"]) assert(guide.includes(p[f]), `Guide is missing ${k}.${f}: ${p[f]}`);
const words = guide.split(/\s+/).filter(Boolean).length;
assert(words <= 600, `Guide is ${words} words; keep it to one page (<= 600)`);
console.log(`guide ok: matches PROFILES, ${words} words`);

if (fs.readFileSync(__dirname + "/rationale.md", "utf8").includes("ROLE_TBD")) console.warn("WARNING: fill in Shima's role (ROLE_TBD) in rationale.md before submitting");
