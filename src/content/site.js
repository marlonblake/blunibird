// ============================================================
//  SITE SETTINGS: her name, bio, contact details.
//  Edit the text between the quotes. Nothing else needs touching.
// ============================================================

export const site = {
  name: "blunibird",

  // These lines slowly rotate under her name on the home page.
  taglines: [
    "poems, stories, essays, and weather",
    "is this the right room",
    "written slightly to the left of myself",
    "please hold the door, it’s the same door",
  ],

  // One or two sentences on the home page, under the name.
  intro:
    "I write poems, short stories, essays, and the occasional sentence that refuses to become anything else.",

  // About page: each string is one paragraph.
  about: [
    "My work lives somewhere between the metaphysical and the mislaid: mirrors, lakes, small domestic hauntings, the strange courtesy of being a person.",
    "Replace this paragraph with her real bio: where she writes from, what she’s working on, what she’s reading.",
  ],

  // Magazines, zines, readings, prizes. One line each. Leave [] to hide the list.
  publishedIn: [
    // "Name of Magazine, 2026",
  ],

  // Contact page
  email: "revolutionoftheblueparadox@gmail.com",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/den_blu_zel" },
    // { label: "Substack", url: "https://..." },
  ],

  // Small credit in the footer (the dev). Set name to "" to hide it.
  credit: { name: "Steve Marlon", url: "" },
};

// The four kinds of writing. "type" in writing.js must match a key here.
export const sections = {
  poem:  { path: "poems",   label: "Poems",         blurb: "Small lights, kept in the ribs." },
  story: { path: "stories", label: "Short stories", blurb: "Rooms that rearrange themselves." },
  essay: { path: "essays",  label: "Essays",        blurb: "Thinking out loud, a little to the left." },
  quote: { path: "quotes",  label: "Quotes",        blurb: "One sentence at a time." },
};
