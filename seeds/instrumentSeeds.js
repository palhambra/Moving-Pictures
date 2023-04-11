const { Instrument } = require('../models');

const instrumentData = [
    {
        product_name: 'Fender Stratocaster',
        price: 1299,
        stock: 4,
        description: 'Based on the highly sought-after "Japanese Vintage" reissued Fender guitars from the 80s, the Fender JV Modified 60s Stratocaster is sure to please. Three vintage-style single-coil pickups yield classic Strat tones, but with a twist: a push-pull Tone 2 pot allows you to switch in the neck pickup in positions 1 and 2 for modded-Strat tones straight from the factory. Factor in an easy-playing Thick Soft V neck profile, a vintage-style tremolo, and vintage-style locking tuners, and the Fender JV Modified 60s Stratocaster brings "Japanese Vintage" mojo to a new generation of players.',
        category_id: 1,
    },
    {
        product_name: 'Fender Telecaster',
        price: 2249,
        stock: 5,
        description:'The Fender American Vintage II 1951 Telecaster is a spot-on re-creation of the 51 Tele, which was the first electric guitar to roll off Fenders assembly line bearing the Telecaster name. Built from a slab of solid ash, this axe delivers a bright, sustaining acoustic tone, which is complemented by a set of year-specific Pure Vintage 51 Telecaster single-coil pickups. Youll be blown away by the substantial playability of the 51 Telecasters U-shaped hard-rock maple neck, while its vintage-radius fingerboard ensures inspiring, comfortable fretting. The American Vintage II 1951 Tele is chock-full of period-correct appointments, including knurled dome knobs, a 3-barrel bridge, vintage-style tuning machines, and an eye-grabbing nitrocellulose lacquer finish on the body and neck. The American Vintage II 1951 Telecaster represents an important piece of Fender history — its a must-have for every Tele connoisseur',
        category_id: 1,
    },
    {
        product_name: 'Fender Jazzmaster',
        price: 2249,
        stock: 7,
        description: 'Blending classic single-coil guitar tones with modern player preferences, the Fender American Ultra Jazzmaster represents a performance-focused update to one of the most iconic electric guitars around. Two Fender Ultra Noiseless pickups deliver the classic chime and richness Jazzmaster fans love, while S1 switching gives you the ability to switch between series or parallel modes for even more sonic versatility. The Modern D neck profile with satin finish plays amazingly fast and smooth, sure to appeal to fans of modern, thinner neck profiles. Complete with a bound, compound-radius fretboard for fluid playability, the Fender American Ultra Jazzmaster is an outstanding example of the worlds favorite offset electric guitar.',
        category_id: 1,
    },
    {
        product_name: 'Ibanez J Custom RG8560',
        price: 2999,
        stock: 4,
        description: 'Looks, tone, playability — the Ibanez RG8560 checks all the right boxes. Beautiful AAA flamed maple caps a resonant African mahogany body. Its 5-piece Super Wizard neck provides a just-right feel, while a J Custom fret edge treatment infuses its bound ebony fingerboard with the ultimate in smooth playability. DiMarzio Black Velvet pickups in a versatile HSS configuration exhibit everything from spanky single-coil bite to thick, full-throttle humbucker tones. A Lo-Pro Edge tremolo double-locking tremolo maintains perfect intonation while bending, twisting, and dive-bombing, while Gotoh tuning machines ensure rock-solid reliability. A member of Ibanez high-end J Custom line, the RG8560 features recessed control knobs and an eye-grabbing tree of life fingerboard inlay.',
        category_id: 1,
    },
    {
        product_name: 'Ibanez Standard S561',
        price: 399,
        stock: 10,
        description: 'With a sonically versatile pickup configuration and a rock-solid fixed bridge, the Ibanez Standard S561 solidbody electric guitar boasts aggressive tone with sustain that lasts for days. Five-way switching capability gives you a wide range tonal combinations to explore, extending the range of this versatile instrument even further. And if youre a technically minded player, youll feel right at home with the sleek Wizard III neck profile. With its comfortably curvy body shape, the Ibanez Standard S561 is the kind of guitar you can woodshed with for hours.',
        category_id: 1,
    },
    {
        product_name: 'Gibson Les Paul Tribute',
        price: 1299,
        stock: 2,
        description: 'If you have ever wanted to add a classic Les Paul to your collection without breaking the bank, the Gibson Les Paul Tribute is here. This homage to the guitar that changed rock forever stays true to the original while incorporating a few modern updates. Once the Gibson Les Paul Tribute is in your hands, you will feel, hear, and see all the reasons this seminal axe has won over so many millions of players the world over since it was first released. The Gibson Les Paul Tribute features a weight-relieved mahogany body with a maple top for stellar resonance and lightweight feel. A beautiful satin nitrocellulose finish lets the tonewoods breathe and glow with their natural color. A smooth maple neck with rosewood fingerboard offers that classic Les Paul feel and response, and a pair of 490 humbucking pickups delivers vintage-style tone.',
        category_id: 1,
    },
    {
        product_name: 'Gibson SG',
        price: 1799,
        stock: 9,
        description: 'Immortalized by Santana at Woodstock and smashed onstage by Townshend, the Gibson SG is a rock icon. Gibson’s Nashville-made SG Standard is the real deal, arming you with a pair of toneful humbuckers, a rounded-profile neck, and a silky Plek’d rosewood fretboard with action that’s almost nonexistent. The SG’s lightweight mahogany body delivers great sustain and no pain, even if you play all night. And the nitro finish looks and feels luscious while enhancing the tone of this legendary solidbody electric guitar. Own your piece of rock history: the Gibson SG Standard.',
        category_id: 1,
    },
    {
        product_name: 'Gibson Flying V',
        price: 2499,
        stock: 12,
        description: 'The Gibson ’70s Flying V re-creates the radical axe that inspired legions of hard-hitting pointy guitars. It delivers scorching rock tones and near-endless sustain, and the comfortable contour of its resonant mahogany body makes you want to play all night long. Wrapping your hand around the Flying V’s rosewood-capped SlimTaper neck invites breakneck fretboard pyrotechnics. Your riffs and leads will be infused with classic tight low end, complex midrange, and sweet highs, courtesy of a pair of hand-wired ’70s Tribute Burstbucker pickups. To top it off, small touches like a matching headstock, silver reflector knobs, and chrome hardware give this solidbody electric guitar an arena-ready look. Whether you’re looking to add a little attitude to your collection or simply want a high-class heavy metal axe, you’ll love Gibson’s ’70s Flying V.',
        category_id: 1,
    },
    {
        product_name: 'ESP LTD EC-401',
        price: 999,
        stock: 14,
        description: 'With the ESP LTD Eclipse EC-401 solidbody electric guitar plugged into your amplifier, youre primed for pure rock fury. You get eternal sustain from the Eclipses set-neck design, which keeps it resonating longer than bolt-on designs. And youve got powerful, articulate tone on demand thanks to EMG humbucking pickups. From chiming cleans to growling high-gain tones, this guitar covers a lot of tonal territory. Find out why some of the most aggressive guitarists choose ESP.',
        category_id: 1,
    },
    {
        product_name: 'ESP LTD Phoenix-7 Baritone',
        price: 1099,
        stock: 3,
        description: 'When its time to tune low, standard-scale-length guitars tend to leave much to be desired, plaguing instruments with everything from inconsistent tuning to intonation issues and more. Thats where ESPs LTD Phoenix-7 Baritone Black Metal electric guitar comes in, boasting a 27-inch scale length to keep everything sounding tight when tuned to the depths. Its mahogany body lays a warm tonal foundation for a single Fishman Fluence 7-string Modern humbucker, dishing out active and passive pickup tones via the push/pull master volume knob. The LTD Phoenix-7 Baritones fast-playing 3-piece mahogany neck is not only smooth in the hand — its silky ebony fingerboard makes quick chord changes and vicious soloing a breeze. Rounded out with high-quality LTD locking tuners and a string-thru Tonepros locking Tune-o-matic bridge, the ESP LTD Phoenix-7 Baritone Black Metal is the metal machine of your dreams…or nightmares.',
        category_id: 1,
    },
    {
        product_name: 'Taylor 858e Grand Orchestra 12-String',
        price: 3999,
        stock: 4,
        description: 'The Taylor 858e Grand Orchestra 12-string Limited-edition Acoustic-electric guitar exudes elegance in appearance and tonal qualities. Spec’d by Taylor to produce sonically sublime tones for the modern guitarist, the 858e Grand Orchestra features a bright, articulate solid Sitka spruce top and warm, rich Indian rosewood back and sides. When its time to plug in, you’ll find excellent sonic reproduction with the Taylor Expression System 2 (ES2) preamp. When fretting chords or running through complex harmonic phrasings, the 858e will greet you with a neo-tropical mahogany neck capped with a Crelicam ebony fingerboard. Out of 100 made, Sweetwater’s shelves have been blessed with 15 — so grab this one-of-a-kind masterpiece while you can!',
        category_id: 2,
    },
    {
        product_name: 'Ibanez TOD10N',
        price: 699,
        stock: 7,
        description: 'First debuted in the video for Polyphia’s “Playing God,” the Ibanez TOD10N Tim Henson Signature Nylon acoustic-electric guitar is a bold reimagining of the crossover nylon string, loaded to the brim with performance-minded features and futuristic nuevo flamenco tone! While many fans initially mistook it for a solidbody instrument, this guitar boasts a far more traditional build than you might expect — the solid spruce top is supported with classical-style fan bracing for a touch-sensitive response that blooms and resonates with even the slightest pluck. Next, the ultra-thin sapele body offers playing comfort to rival even the slimmest of solidbodies, with two deep cutaways for the unfettered fret access required for Tim’s brand of technical playing. Finally, a set of Ibanez and Fishman electronics round out this acoustic-electric with beautiful plugged-in tones, faithfully replicating every ounce of this 6-strings rich tonal depth.',
        category_id: 2,
    },
    {
        product_name: 'Gibson Acoustic Hummingbird',
        price: 3999,
        stock: 5,
        description: 'Having just rounded the corner on its 61st year, the Gibson Hummingbird continues to soar as one of the most legendary acoustics of all time. The Gibson Hummingbird Standard puts classic tone, playability, and design into your hands. The Standard features a solid Sitka spruce top with mahogany back and sides for a stunning blend of punchy treble and midrange from the spruce top, held together with a rich low end from the mahogany back and sides — a tonal presentation that has won over countless rock legends from Keith Richards to Thom Yorke. A rounded "C"-profile neck with rosewood fingerboard offers impeccable playability and response, ideal for strumming big open first-position chords and picking out intricate leads up and down the neck. Also, an onboard LR Baggs VTC pickup system delivers beautiful amplified acoustic tone when you plug in. The many Hummingbird Standard owners here at Sweetwater can attest this is that rare acoustic that truly offers a unique playing experience along with one-of-a-kind tone.',
        category_id: 2,
    },
    {
        product_name: 'Taylor 114ce Grand Auditorium',
        price: 999,
        stock: 6,
        description: 'When players seek a stunning workhorse acoustic-electric guitar packed with modern features, Sweetwater pros regularly point toward Taylor’s 114ce LTD without hesitation! The 114ce Acoustic-electric Guitar is an evergreen powerhouse packed with studio- and gig-ready features fit for advancing beginning and seasoned pros alike. This LTD edition rocks the same slim Grand Auditorium waist and spacious body cutaway as the standard version, which makes for comfortable playability in any position. A solid Sitka spruce paired with layered walnut back and sides guarantee a well-balanced tone with striking clarity and that signature Taylor sparkle you won’t find anywhere else. The 114ce’s maple neck delivers one of the most comfortable acoustic guitar-playing experiences ever. On top of that, the onboard ES2 electronics provide authentic full-bodied amplification with additional tools for shaping tone. Unique appointments include black binding, tri-line purfling, a bold three-ring soundhole rosette, and a suave matte body finish for stellar stage presence. This 114ce is here for a limited time only, so act fast!',
        category_id: 2,
    },
    {
        product_name: 'Martin 000-10E',
        price: 899,
        stock: 10,
        description: 'Find out what so many guitarists have come to love in a Martin with the very affordable and beautifully designed 000-10E Road Series. This Auditorium model acoustic-electric guitar features a solid all-sapele body for rich, full tone. In addition, a select hardwood neck with Richlite fingerboard offers incredible playability and response, ideal for both fingerstyling and flatpicking. And when you’re ready to plug in, Fishman MX-T electronics deliver stellar amplified acoustic tone.',
        category_id: 2,
    },
];

const seedInstruments = () => Instrument.bulkCreate(instrumentData);

module.exports = seedInstruments;