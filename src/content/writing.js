// ============================================================
//  HER WRITING: this is where every piece lives.
//
//  To add a new piece, copy one block below and paste it at the top
//  of the list. Fill in:
//
//    slug   the web address, lowercase with dashes   (e.g. "moth-hours")
//    type   "poem", "story", "essay" or "quote"
//    title  the title (leave "" for quotes)
//    date   YYYY-MM-DD   (newest shows first automatically)
//    body   the writing, between the backticks ` `
//
//  How body is shown:
//    poem   line breaks are kept exactly as typed
//    story / essay   a blank line starts a new paragraph
//    quote  just the quote
//
//  Tip: if she uses a backtick ` inside the writing, type \` instead.
// ============================================================

const pieces = [
  {
    slug: "my-dying-dog",
    type: "poem",
    title: "My dying dog",
    date: "2026-01-01",
    body: `
I cannot fix you.
It was never my fault,
Yours alone for choosing wrong.
I just own you, you know—
Not any drool trail you leave
On that ground you hobble on.

But I do want to save you.
Isn't that itself enough?
So put the rosy tongue out
And wag the tail.
Please save yourself.
You do not want me infected
Through a saving touch.

A God can't be owned.
I'm not bound; I run free.
You will die someday
And will be replaced.
I will tame and name
Once all over again.

When I first got you,
I warned you
That I call blood and tears
Painless liquid on my worst days,
And my eyes can only see, not feel.

I do not want to kill you.
But I wish you would take on
The greatest pain
To end your little pain—
That you badly want me to end,
As if I'm mighty as my name.

It's not much, you say.
But then why must I
Lift a finger?
You and your lies, always.
I'm done. I'm done. I'm done.
Please take these labels away.
`,
  },
  {
    slug: "midnight-cravings",
    type: "poem",
    title: "Midnight Cravings",
    date: "2026-01-01",
    body: `
I love you both.
Enter when I’m alone,
Share me only together.
Two daunting beings,
One to protect me from the other.

Windows, wide open.
Night the early gentleman.
Today twice your fragrance?
Is he also arriving later?

Right ear reserved
For hoots and hawks,
Other vigilant on footsteps,
That might never come,
But somehow always has.

My pupils, orphans of darkness,
Bored, looked inside for newer thrills.
Body too too used to your coldness,
Found itself in warm cotton in his bed.

Then I heard door slams and water,
Running down his collarbone
On to his feet bearing tiles,
Where once he made me
Bleed or maybe even twice.

Sensing the wolf’s thirst for it,
Tonight’s prey hid between my thighs.
The darker performer, night’s twin in smell,
His fur, better fabric to cover me.

Those cold fingertips,
Dragged me out the void I was in
To the heaven on an earthy bed,
He was about to make
Out of me for the both of us.

My hand traced down a little
In need of more and more fur
But that welcomed an aching beast
Through the walls of my soul.

Hours had passed.
He collapsed on me breaking
The night’s nosy barriers.
That’s when I smelled on his neck,
A son of mine.
`,
  },
  {
    slug: "ode-à-la-lumière",
    type: "poem",
    title: "Ode à la lumière",
    date: "2026-01-01",
    body: `
First he was just a candle light.
Or maybe a light bulb in disguise.
Now a whole damn house so wise,
Guides and protects me at night.

Like every good thing comes at costs,
Now I can’t carry it wherever I want.
Even if I can, will it be lit as I please?
Should I toss away fully or just let it be?

“Press to me more,” that’s what he said,
Like I wasn’t already all his in his bed.
A terrified, lone ship, I might slip away.
Baby be a harbour, safe for me to stay.

Hold my hand, no hold me whole.
Grabbing my soul and owning all.
Better be small, yours and known,
Than being lost in oceans alone.

Just a heart of a siren, ain’t free to float.
Only today I breathe and tomorrow I won’t.
Can’t own a grave to your name, I know,
So trust me less and I’ll trust you more.
`,
  },
  {
    slug: "the-first-kiss",
    type: "poem",
    title: "The first kiss",
    date: "2026-01-01",
    body: `
At a simple tryst by the lake,
Fall eyes of a boy did her nake.
His lips wore crumbs of velvet cake,
Enticing hungry fish in a daze.

Her body bare was too at fault,
For making all the voyeurs halt;
The boy unaware of this naught,
Leaned in for her virgin pout.

But a teary cloud love-lorn,
Bawled on him to make them torn,
Like a cat he ran and mourned,
The first kiss flew and fell stillborn.

And on a Sunday morn she strolled,
Searching for his kiss they stole.
Still sweet on the water she saw,
The kiss floating emitting gold.

She dived at once ever so blissed,
Farewell thou siren unkist!
`,
  },

];

// Newest first. (You don't need to edit this line.)
export const writing = [...pieces].sort((a, b) => b.date.localeCompare(a.date));
