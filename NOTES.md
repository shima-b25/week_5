# Internal notes (never publish this folder; only `index.html` goes to GitHub Pages)

## Files
- `index.html`: the whole website (hero, approach, dimensions, stages, assessment, results, team), styled
  after the Squarespace "Consulting" blueprint. `QUESTIONS`, `PROFILES`, `pickProfile` live between the
  `BEGIN/END LOGIC` markers; everything after `END LOGIC` is interface only. Animations respect
  the OS "reduce motion" setting.
- `framework.md`: dimensions, Stage 1–5 text, calibration table, Interpretation Guide.
- `rationale.md`: Question Design Rationale draft.
- `check.js`: `node check.js` runs question checks, an exhaustive scoring test (all 1,419,857 score
  vectors) and a word-for-word Guide vs `PROFILES` match. Run it after ANY edit.

## Rules
- Change `PROFILES` in `index.html` and the Guide in `framework.md` together (check.js enforces it).
- Never let an option depend on fleet size, hubs or network scale.
- Keep options cumulative; keep Stage 3→4 as "integrated / automatic / measured".

## Before submitting
1. Team roles are set (Alifya and Shima: Framework Designer; Disha: Question Author; Rishit: Tool Builder).
2. Open every link in the calibration table in `framework.md`; confirm each claim. Evidence there
   came from search-result summaries, not from reading the pages.
3. Assemble one submission doc: names/roles → Rationale → Interpretation Guide (one page) → stage
   appendix → "Known gaps".
4. Each member publishes their own Pages copy containing ONLY `index.html`.

## Known gaps (put in the submission)
- No sourced Stage 1 example organization for any dimension; the Southwest 2022 crew-scheduling
  case is Stage 2 on o1. Stage 5 examples are partial (Stage 4–5) and unsourced for Change Capacity.
- The requirements were reconstructed from the funeral-home project's notes, not from the assignment
  text. Re-check against the real Week 5 instructions.
- Never tested on a real phone; only headless Chrome at desktop width.
