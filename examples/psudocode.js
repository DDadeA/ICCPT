//@ts-nocheck

import Project from "../src/iccpt";
import { Requires } from "../src/iccpt";

const pr = new Project();

const points = {
  a: pr.createPoint("a", 1000), // initial value 1000
  b: pr.createPoint("b", 100),
};

// row1 = pr.rows[0]
const row1 = pr.addRow({
  id: "row_id", // default random hex
  title: "title",
  debug_title: "debug_title",
  text: "text",
  image: "image_url",
  template: "image_top", // 'image_left', 'image_right', 'image_bottom', 'image_center'

  allowed_choice: 0,
  selected_choice: 0,
  deselect_choice: false,

  requires: null,
});

// choice1 = row1.choices[0]
const choice1 = row1.addChoice({
  id: "choice_id",
  title: "title",
  debug_title: "debug_title",
  text: "text",
  image: "image_url",
  template: "image_top", // 'image_left', 'image_right', 'image_bottom', 'image_center'

  requires: null,
});

// addon1 = choice1.addons[0]
const addon1 = choice1.addAddon({
  // id: 'addon_id', // selectable addon is not supported yet.
  title: "title",
  debug_title: "debug_title",
  text: "text",
  image: "image_url",
  template: "image_top", // 'image_left', 'image_right', 'image_bottom', 'image_center'

  requires: null,
});

const choice2 = row1.addChoice().setPoint(point1, -3); // how much spend. total 0 -> 3

const req1 = new Requires().select("id1").nselect(choice2); // choice object can be used as it.

const req2 = new Requires()
  .point("a", ">=", 10)
  .pointCompare("a", ">=", point1);

const req3 = new Requires().xOfTheseMet([req1, req2], 2);

const req4 = new Requires().nxOfTheseMet([req3, req1], 1);

choice1.setRequires(req1);

pr.export((format = "iccplus2")); // default
