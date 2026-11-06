window.PHYSCAP_EVENT_EXAMPLES=[
  {
    "id": "third",
    "label": "Third-person",
    "level": "L3 / SCENES",
    "title": "A droplet, two wires, changing contact.",
    "caption": "A dark wire descends into a droplet and withdraws. A metallic wire then approaches from the right, contacts the droplet, and begins to retract.",
    "note": "Source: physcap9k_00252. Event descriptions follow the completed third-person annotation; replay windows follow its frame boundaries. 0.5× replay with an end-frame hold.",
    "source": "assets/events/droplet-source.mp4",
    "events": [
      {
        "name": "Approach",
        "actor": "thin_dark_wire",
        "motion": "translation · downward",
        "target": "clear liquid droplet",
        "contact": "no contact yet",
        "state": "wire above → near droplet",
        "order": "first",
        "interval": "0.00–0.63 s · replay window",
        "evidence": "A thin dark wire descends from above toward the clear droplet on the sheet before visible contact.",
        "media": "droplet-1",
        "frames": [
          0,
          15
        ],
        "replayMs": 1830
      },
      {
        "name": "Press",
        "actor": "thin_dark_wire",
        "motion": "slight movement at contact",
        "target": "clear liquid droplet",
        "contact": "wire–droplet contact maintained",
        "state": "droplet surface deforms around wire",
        "order": "after Approach",
        "interval": "0.63–2.50 s · replay window",
        "evidence": "The dark wire contacts the droplet and remains inserted/touching it with slight vertical movement while the droplet shows a depressed/contacted shape around the wire.",
        "media": "droplet-2",
        "frames": [
          15,
          60
        ],
        "replayMs": 4330
      },
      {
        "name": "Separate",
        "actor": "thin_dark_wire",
        "motion": "translation · upward",
        "target": "clear liquid droplet",
        "contact": "wire–droplet contact ends",
        "state": "wire touching → withdrawn",
        "order": "after Press",
        "interval": "2.50–2.92 s · replay window",
        "evidence": "The dark wire withdraws upward out of view from the droplet, leaving the droplet visible without the wire.",
        "media": "droplet-3",
        "frames": [
          60,
          70
        ],
        "replayMs": 1410
      },
      {
        "name": "Re-approach",
        "actor": "thin_metallic_wire",
        "motion": "translation · toward droplet",
        "target": "clear liquid droplet",
        "contact": "approach → contact transition",
        "state": "second wire approaches droplet",
        "order": "after Separate",
        "interval": "2.92–4.17 s · replay window",
        "evidence": "A thin metallic wire enters from the right, fingertips appear above the sheet holding it, and the wire moves closer to the droplet before contact.",
        "media": "droplet-4",
        "frames": [
          70,
          100
        ],
        "replayMs": 3080
      },
      {
        "name": "Contact",
        "actor": "thin_metallic_wire",
        "motion": "held at contact",
        "target": "clear liquid droplet",
        "contact": "wire–droplet contact maintained",
        "state": "wire remains against droplet",
        "order": "after Re-approach",
        "interval": "4.17–5.42 s · replay window",
        "evidence": "The metallic wire makes and maintains contact with the droplet while held by the fingertips.",
        "media": "droplet-5",
        "frames": [
          100,
          130
        ],
        "replayMs": 3080
      },
      {
        "name": "Retract",
        "actor": "thin_metallic_wire",
        "motion": "translation · away from droplet",
        "target": "clear liquid droplet",
        "contact": "withdrawal begins; separation incomplete",
        "state": "wire tip begins moving away",
        "order": "after Contact",
        "interval": "5.42–5.80 s · replay window",
        "evidence": "The metallic wire begins to withdraw from the droplet, with its tip moving away from the droplet by the final sampled frame.",
        "media": "droplet-6",
        "frames": [
          130,
          139
        ],
        "replayMs": 1330
      }
    ]
  },
  {
    "id": "ego",
    "label": "Egocentric",
    "level": "L2 / HUMAN MANIPULATION",
    "title": "Opening a bottle, event by event.",
    "caption": "The left hand holds a Gatorade bottle while the right hand unscrews and removes the yellow cap.",
    "note": "Source: EgoDex egodex500_0494, the bottle-opening example in the report. 0.5× replay with an end-frame hold. Event boundaries serve as a visual walkthrough.",
    "source": "assets/events/bottle-source.mp4",
    "events": [
      {
        "name": "Reach",
        "actor": "left_hand + right_hand",
        "motion": "translation · reaching forward",
        "target": "bottle + cap",
        "contact": "none; hands approach",
        "state": "cap attached → attached",
        "order": "first",
        "interval": "0.00–0.37 s · frames 0–11",
        "evidence": "Both hands reach toward the bottle.",
        "media": "bottle-reach",
        "replayMs": 1340
      },
      {
        "name": "Grasp",
        "actor": "left_hand stabilizes; right_hand grasps",
        "motion": "hands close around bottle and cap",
        "target": "bottle body + yellow cap",
        "contact": "hand–bottle and hand–cap contact begins",
        "state": "unheld → grasped",
        "order": "after Reach",
        "interval": "0.37–0.83 s · frames 11–25",
        "evidence": "Left hand grips the bottle body; right hand grips the cap.",
        "media": "bottle-grasp",
        "replayMs": 1540
      },
      {
        "name": "Unscrew",
        "actor": "right_hand turns; left_hand stabilizes",
        "motion": "rotation · unscrewing",
        "target": "yellow cap",
        "contact": "hand–cap contact maintained",
        "state": "cap threaded → loosened",
        "order": "after Grasp",
        "interval": "0.83–1.87 s · frames 25–56",
        "evidence": "Right hand turns the cap while the left holds the bottle stable.",
        "media": "bottle-unscrew",
        "replayMs": 2670
      },
      {
        "name": "Lift",
        "actor": "right_hand",
        "motion": "translation · lifting away",
        "target": "yellow cap",
        "contact": "hand–cap maintained; cap–bottle separates",
        "state": "loosened cap → removed",
        "order": "after Unscrew",
        "interval": "1.87–2.33 s · frames 56–70",
        "evidence": "Right hand lifts the cap away from the bottle opening.",
        "media": "bottle-lift",
        "replayMs": 1540
      },
      {
        "name": "Place",
        "actor": "right_hand",
        "motion": "translation · lowering onto surface",
        "target": "yellow cap + green surface",
        "contact": "cap–surface contact begins; hand releases cap",
        "state": "held → supported by surface",
        "order": "after Lift",
        "interval": "2.33–2.87 s · frames 70–86",
        "evidence": "Right hand sets the removed cap onto the green sheet.",
        "media": "bottle-place",
        "replayMs": 1670
      },
      {
        "name": "Release",
        "actor": "left_hand releases; both hands withdraw",
        "motion": "translation · hands retract",
        "target": "open bottle + removed cap",
        "contact": "hand–bottle contact ends",
        "state": "bottle and cap supported separately",
        "order": "after Place",
        "interval": "2.87–3.30 s · frames 86–99",
        "evidence": "Left hand lets go of the bottle as the right hand moves back.",
        "media": "bottle-release",
        "replayMs": 1470
      }
    ]
  },
  {
    "id": "umi",
    "label": "UMI",
    "level": "L1 / HANDHELD GRIPPERS",
    "title": "Two grippers. One towel. Into the basket.",
    "caption": "Both grippers grasp the folded towel, lift and carry it left over the basket, then lower it and release the sides in succession before withdrawing empty.",
    "note": "Source: UMI umi500_0297. High-camera replay; contact and release checked against both wrist views. These illustrative replay windows and summaries incorporate visual-review corrections; they are not a certified frame-exact annotation export. 0.5× replay.",
    "source": "assets/events/towel-multiview.mp4",
    "events": [
      {
        "name": "Approach",
        "actor": "left_gripper + right_gripper",
        "motion": "translation · toward towel",
        "target": "folded towel + white basket",
        "contact": "no grasp established",
        "state": "towel supported by table",
        "order": "first",
        "interval": "0.00–5.17 s · replay window",
        "evidence": "The open grippers approach opposite edges of the folded towel.",
        "media": "towel-1",
        "frames": [
          0,
          155
        ],
        "replayMs": 10910
      },
      {
        "name": "Grasp",
        "actor": "left_gripper + right_gripper",
        "motion": "grippers close around edges",
        "target": "folded towel + white basket",
        "contact": "both grippers hold towel",
        "state": "unheld → held at both sides",
        "order": "after Approach",
        "interval": "5.17–6.50 s · replay window",
        "evidence": "Both grippers close on the cloth; the edges bunch as lifting begins.",
        "media": "towel-2",
        "frames": [
          155,
          195
        ],
        "replayMs": 3250
      },
      {
        "name": "Lift & carry",
        "actor": "left_gripper + right_gripper",
        "motion": "translation · upward and left",
        "target": "folded towel + white basket",
        "contact": "grasp maintained on both sides",
        "state": "on table → carried over basket",
        "order": "after Grasp",
        "interval": "6.50–10.67 s · replay window",
        "evidence": "The towel lifts from the table and moves left toward the basket.",
        "media": "towel-3",
        "frames": [
          195,
          320
        ],
        "replayMs": 8910
      },
      {
        "name": "Lower",
        "actor": "left_gripper + right_gripper",
        "motion": "translation · downward",
        "target": "folded towel + white basket",
        "contact": "both sides remain grasped",
        "state": "above basket → lowered into basket",
        "order": "after Lift & carry",
        "interval": "10.67–11.67 s · replay window",
        "evidence": "Both grippers lower the towel toward the basket interior.",
        "media": "towel-4",
        "frames": [
          320,
          350
        ],
        "replayMs": 2580
      },
      {
        "name": "Release",
        "actor": "left_gripper + right_gripper",
        "motion": "grippers open; cloth settles",
        "target": "folded towel + white basket",
        "contact": "right side releases, then left",
        "state": "gripper-held → basket-supported",
        "order": "after Lower",
        "interval": "11.67–12.00 s · replay window",
        "evidence": "The right side releases first, followed by the left; the towel settles inside.",
        "media": "towel-5",
        "frames": [
          350,
          360
        ],
        "replayMs": 1250
      },
      {
        "name": "Withdraw",
        "actor": "left_gripper + right_gripper",
        "motion": "translation · away from towel",
        "target": "folded towel + white basket",
        "contact": "no further grasp contact",
        "state": "towel remains inside basket",
        "order": "after Release",
        "interval": "12.00–13.27 s · replay window",
        "evidence": "Both empty grippers withdraw, leaving the towel in the basket.",
        "media": "towel-6",
        "frames": [
          360,
          398
        ],
        "replayMs": 3080
      }
    ]
  }
];
