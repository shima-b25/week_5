# Question Design Rationale — Airline Digital Maturity Self-Assessment

**Team:** Alifya Saify — Framework Designer · Disha Reddy — Question Author · Rishit Mathur — Tool Builder · Shima Kananiazari — Framework Designer

## How we wrote the questions

There are 20 questions, four for each of the five dimensions. We tried to ask how an airline does
something rather than whether it does it at all. "Does the airline have an app?" tells you almost
nothing, since pretty much every airline has one. "How can passengers change a trip digitally?"
is more useful because the answers range from a website that only shows information to one-tap
self-service.

Each question has five answers that line up with Stages 1 to 5, and they build on each other. If
you can honestly pick answer 4, you're already doing everything in answer 3. We ask people to pick
the highest answer that's fully true for most of their flights. Otherwise an airline that does one
thing well on a single route could score itself higher than it should.

We also didn't want size to count as maturity. A regional or low-cost carrier running one aircraft
type with good systems should be able to reach Stage 5 just like a big network airline. So none of
the answers mention fleet size, hubs or number of stations. The jump from Stage 3 to Stage 4 is
always about capability: information moves on its own, problems get flagged, and results get
measured.

## What each dimension covers

**Data & Systems Foundation (d1–d4).** Everything else depends on data that people share and
trust. These questions look at flight operations data, maintenance records, passenger and booking
data, and whether key numbers like on-time performance mean the same thing in every report.
Maintenance records got their own question. Regulators already require them, so the real
difference between airlines is whether those records get used for planning or just sit there.

**Passenger Digital Engagement (p1–p4).** These follow a trip from start to finish: booking and
changes, what happens when a flight is disrupted, the day of travel, and how the airline tailors
offers and collects feedback. Disruptions get a separate question because that's when passengers
decide what they really think of an airline.

**Operations Automation (o1–o4).** Crew scheduling, flight planning and dispatch, turnarounds, and
recovering the schedule after a disruption. A lot of turnaround work is done by outside handling
companies, so that question asks about the work itself, whoever does it. We kept forecasting out
of this dimension on purpose, because it belongs in the next one.

**Predictive & AI Deployment (a1–a4).** Predicting part failures, demand and fares, and delays,
plus how AI tools are managed. The last question is about oversight. An AI tool with nobody in
charge of it and no backup plan when it gets something wrong isn't a sign of maturity.

**Organizational Change Capacity (c1–c4).** How the airline decides what to change, how frontline
staff pick up new systems, safety and regulatory review, and whether it has the skills in-house.
The safety review question is specific to aviation, where any digital change that touches flight
operations has to go through safety management before it goes live.

## How scoring works

Each dimension's score is the average of its four answers. The tool then checks four rules, always
in the same order, and picks one of eight profiles (the Interpretation Guide lists them). We chose
profiles based on the shape of the scores instead of the total. Two airlines can have the same
average and still need completely different next steps. If two dimensions tie for lowest, the
results show both and use a fixed order to pick the profile.

## What this tool can't do

It's a self-assessment, so it only reflects what the person filling it out sees. Someone who works
in one department might guess wrong about the others. A few questions, especially the ones on AI
oversight and change management, probably need input from more than one person. We also haven't
found real Stage 1 and Stage 5 example airlines for every dimension yet (see Known gaps).
