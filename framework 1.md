# Framework — Airline Digital Maturity Self-Assessment

Five dimensions, five stages. Scores are per-dimension averages of four questions (1–5). The
Interpretation Guide at the bottom must match `PROFILES` in `index.html` word for word
(`node check.js` verifies this).

## Dimensions and Stage 1–5 descriptions

Stage names: 1 Initial / Ad hoc, 2 Developing / Reactive, 3 Defined / Repeatable, 4 Managed /
Measured, 5 Optimizing / Innovating. No stage depends on fleet size, number of hubs or being a
mainline carrier; a small or low-cost carrier can reach Stage 4–5 in any dimension.

### 1. Data & Systems Foundation
How flight, aircraft, passenger and crew data are recorded, connected and trusted.

- **Stage 1:** Each department keeps its own spreadsheets, logs or paper records. Answering a cross-department question means phoning around and reconciling by hand.
- **Stage 2:** A main operations or reservations system exists, but other teams get data by request or manual export. Reports from different teams often disagree.
- **Stage 3:** One system is the shared source, and other core systems receive scheduled feeds from it. Key datasets have owners and written definitions.
- **Stage 4:** Reservations, operations control, crew and maintenance exchange updates automatically within minutes. Key measures such as on-time performance use one definition everywhere.
- **Stage 5:** Core systems read from one governed, near-real-time data layer. Data quality is monitored with alerts, and issues are tracked to closure.

### 2. Passenger Digital Engagement
How passengers book, change, get informed and travel on the day, across web, app and airport.

- **Stage 1:** Booking and changes mostly go through phone, agents or counters. Passengers learn of delays at the gate or by phone.
- **Stage 2:** A website takes bookings, but changes, refunds and delay information still need staff. Delay messages are the same for everyone on a flight.
- **Stage 3:** Web and app cover booking, common changes and check-in, and passengers get automatic individual alerts. Staff handle the exceptions.
- **Stage 4:** Changes, refunds, add-ons and disruption rebooking are self-service, and alerts include one-step options. Conversion and drop-off are tracked by channel.
- **Stage 5:** A trip can start in one channel and finish in another without re-entering anything, and offers are compared against control groups. Every disruption is followed by measured recovery and feedback results.

### 3. Operations Automation
How crews, flight plans, ground turnarounds and schedule recovery are run by systems instead of phone calls and manual checks.

- **Stage 1:** Crew, planning and ground tasks are coordinated by phone, radio and whiteboard. Times are written on paper.
- **Stage 2:** Software builds crew rosters and flight plans, but daily changes and legal checks are done by hand. Ground times are recorded afterwards.
- **Stage 3:** Systems check crew legality and pull weather and airspace data automatically. Turnaround tasks are tracked with timestamps on shared devices.
- **Stage 4:** Schedule changes automatically trigger crew, dispatch and ground alerts, and the system suggests recovery options with cost shown. Turnaround delays are reported weekly by cause.
- **Stage 5:** A single disruption event updates crew, hotels, transport, bookings and pay records together. Recovery results are reviewed after each event and change procedures and system settings.

### 4. Predictive & AI Deployment
How models and analytics are used to anticipate failures, demand and delays, and how AI tools are governed.

- **Stage 1:** There is no forecasting beyond judgment and last year's numbers, and no AI tools are in use. Maintenance follows fixed intervals or waits for failure.
- **Stage 2:** Analysts produce periodic spreadsheet forecasts and reliability reports. Staff use general AI tools informally.
- **Stage 3:** Fixed-threshold alerts, a revenue-management system and one governed AI tool for a defined task are in production. Each has a named owner.
- **Stage 4:** Models for selected components, delays and demand are used in daily decisions, and forecast error is measured. Each AI tool has an approved use and a human fallback.
- **Stage 5:** Predictions are checked against outcomes every cycle, and models are retrained when accuracy drops. A standing review decides which AI tools expand or retire.

### 5. Organizational Change Capacity
How the airline decides, prepares for and absorbs digital change, including safety review and staff readiness.

- **Stage 1:** Changes come from individual managers with no named owner. Staff learn new systems from colleagues.
- **Stage 2:** An IT lead or manager handles requests case by case. Staff get a one-time briefing, and safety review happens only for obvious flight-operations changes.
- **Stage 3:** A named executive sponsor keeps a written priority list, and every digital change gets a documented safety and compliance review. Training is role-specific.
- **Stage 4:** A cross-functional group sets priorities with agreed criteria and tracks benefits. Frontline representatives test changes, and safety review starts in the project plan with rollback and monitoring.
- **Stage 5:** Benefits are measured after launch and change funding and priorities. Past incidents and near misses improve the review process itself.

## Calibration test (real organizations)

Evidence comes from web-search result summaries on 2026-09-25. **Team: open each link and confirm
the claim before submitting.** Ratings are on what is publicly visible, not inside knowledge.

| Dimension | Stage 1 anchor | High anchor (what is visible) |
|---|---|---|
| Data & Systems Foundation | *Not yet sourced (gap)* | Delta uses Airbus's Skywise Core Platform for aircraft data, per [Delta TechOps](https://deltatechops.com/delta-techops-expanding-predictive-maintenance-capabilities-with-new-airbus-partnership/). Supports Stage 4 on d2; not enough to call Stage 5. |
| Passenger Digital Engagement | *Not yet sourced (gap)* | Delta sends proactive delay alerts and offers self-service rebooking in its app ([Delta News Hub](https://news.delta.com/deltas-latest-app-release-puts-more-power-your-pocket-holiday-season)); KLM offers customer service over WhatsApp ([Runway Girl](https://runwaygirlnetwork.com/2024/11/klm-digital-customer-service-largely-shines-even-as-partner-fumbles/)). Supports Stage 4 on p1/p2. |
| Operations Automation | Southwest's crew scheduling in December 2022 relied on manual reassignment with limited capacity: Stage 2 on o1 ([Simple Flying](https://simpleflying.com/aging-software-canceled-16700-southwest-airlines-flights-finally-replaced-2028/)). A true Stage 1 is still unsourced. | Alaska Airlines uses Flyways AI to give dispatchers route options and reports fuel savings ([Alaska Airlines](https://news.alaskaair.com/sustainability/how-ai-is-helping-alaska-airlines-plan-better-flight-routes-and-lower-emissions/)). Supports Stage 4–5 on o2. |
| Predictive & AI Deployment | *Not yet sourced (gap)* | Air France-KLM's Prognos flags failures 30–50 flights ahead ([Aviation Today](https://www.aviationtoday.com/2019/04/30/air-france-klm-head-strategy-talks-predictive-maintenance-aeecamc-2019/)); easyJet reports avoided cancellations using Skywise ([Airbus](https://www.airbus.com/sites/g/files/jlcbta136/files/623de903e6f64297345ed4e9318e8ab3_E-Airbus-Skywise-and-easyJet.pdf)). Supports Stage 4–5 on a1. |
| Organizational Change Capacity | *Not yet sourced (gap)* | *Not yet sourced (gap). Change capacity is mostly internal and hard to see from outside.* |

## Interpretation Guide

Your result is the average of four answers in each of five dimensions (1 = Stage 1, 5 = Stage 5).
The tool applies these rules in order and stops at the first that fits.

### 1. The Early-Stage Operator
**Pattern:** Every dimension scores below 2.5.
Most work runs on people, phone calls and separate tools. That can work for a small carrier, but each disruption is handled from scratch and little is learned from it.
**Next action:** Pick one flight-critical record, such as maintenance status or crew rosters, and move it into one shared system.

### 2. The Connected Airline
**Pattern:** Every dimension scores 3.5 or higher.
Systems share data, passengers can help themselves, and change is planned with safety review and staff input. No single area is holding the others back.
**Next action:** Your next frontier is proof: measure whether each automation or AI tool cut delays, cost or complaints, and retire the ones that did not.

### 3. The Steady Middle
**Pattern:** The highest and lowest dimension scores are less than 0.75 apart, and neither profile above applies.
Progress is even across the airline, so there is no single weak spot to fix first. Gains now come from lifting several areas together.
**Next action:** Choose the dimension where one stage more would help the most flights, and lift it a full stage this year.

### 4. The Siloed Airline
**Pattern:** Data & Systems Foundation is the lowest dimension.
Passenger, operations or AI work is ahead of the data underneath it. Each new tool needs its own feeds, and reports from different teams disagree.
**Next action:** Agree one definition of on-time performance, then connect reservations, operations control and maintenance so they exchange updates automatically.

### 5. The Behind-the-Scenes Airline
**Pattern:** Passenger Digital Engagement is the lowest dimension.
The operation runs better than passengers can see. They still call or queue for changes and hear about disruptions late.
**Next action:** Offer self-service rebooking and automatic individual delay alerts for your most common disruption.

### 6. The Front-of-House Airline
**Pattern:** Operations Automation is the lowest dimension.
Passenger channels are ahead of the operation behind them. Apps and alerts promise more than crews, dispatch and ground teams can deliver, so disruptions become manual scrambles.
**Next action:** Track turnaround tasks on shared devices with timestamps that operations control can see.

### 7. The Ready-but-Reactive Airline
**Pattern:** Predictive & AI Deployment is the lowest dimension.
Data and operations are in place, but decisions still follow problems instead of anticipating them. Forecasts and models are not yet used for maintenance, demand or delays.
**Next action:** Start with one prediction, such as delay risk or one component's maintenance, and test it against what actually happened.

### 8. The Tools-Without-Traction Airline
**Pattern:** Organizational Change Capacity is the lowest dimension.
Systems are ahead of the organization's ability to absorb them. New tools arrive with too little training, priority setting or safety review, so use lags.
**Next action:** Name one executive owner for digital priorities and add safety and compliance review to every digital project plan from the start.

Profiles 4–8 are used when none of 1–3 fits. If two or more dimensions tie for lowest, the tool names all of them and uses the first in this order: Data, Passenger, Operations, AI, Change.
