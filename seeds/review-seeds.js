const { Review } = require('../models');

const reviewData = [
    {
        instrument_id: 1,
        user_id: 1,
        comment: 'I had a late 60s Strat back in that timeframe, so when I saw this, I felt like it would be right for me. Here are my quick thoughts about it. The Japanese craftsmanship is immaculate and beautiful in every way. I think it is comparable to the best American made Fender guitars. The push-pull function adds some nice new tone colors to the standard Strat 5 way tones. The neck shape plays and feels good to me. The back of the neck is a satin finish and for me the neck on my Pro and Ultra feel slicker. It still feels great though. I actually really like the larger headstock when I actually got to see the guitar. This Strat looks nearly identical to the last one that Jimi Hendrix played before he passed. I was able to see him perform live in around 1967, so it has special meaning to me. Id say to check one out if any of these details peak your interests. Im really glad I did. Great guitar!',
    },
    {
        instrument_id: 2,
        user_id: 2,
        comment: 'I have this guitar since last October and Im extremely impressed with the quality and sound. I have 3 Teles Custom Shops 50s and a real one from 56 and this new American Vintage series is in the same level. I love the big U neck, vintage frets, finish, and the stock pickups sound like it should be. If you love vintage Teles this is a serious instrument for all the Telecasters lovers. I also got mine with a really good weight 7.2 lb. Sounds great and looks great! Thank you Leo Fender! You got it right since the first day!',
    },
    {
        instrument_id: 3,
        user_id: 3,
        comment: 'Sooo, I have a son and a fiancé and a dog and some family down South and these are all things that I love slightly more than this guitar. But not every day, and not by much. Seriously though, this guitar made me stop wanting to buy guitars. Its got so many sounds to explore and a tone and feel thats just incredible. I will say there was a month or two learning curve… Id reach for a knob before a riff and it wasnt quite where I thought… its Les Paul kind of heavy and it drives my local tech crazy… but after spending some time with this guitar, Ive just fallen in love with every little weird quirk about it. Dont let peoples comments throw you off.. this is a high quality instrument with some crazy breadth and depth of sounds under the hood. I love it.',
    },
    {
        instrument_id: 4,
        user_id: 2,
        comment: 'So I own several J Customs. and I am a huge fan of Ibanez, when I seen this one I purchased without question.',
    },
    {
        instrument_id: 5,
        user_id: 2,
        comment: 'This guitar definitely has a Strat vibe. The neck pickup sounds as glassy as any mid range Fender/Squier Ive played. It is very lightweight. The neck radius is to me a bit more playable than the standard 9.5 on most strats. Im always amazed at the quality of lesser expensive Ibanez guitars. My $200 Gio also plays very good even if it was to cost twice as much. I would say that the pickups are pretty bright sounding, but with a little tweaking you can dial it down.',
    },
    {
        instrument_id: 6,
        user_id: 3,
        comment: 'Ive heard bad things from some people about Gibson over the last decade but Ive also heard they have revamped everything with new leadership as of late and I had my eye on the tribute for quit some time because I just totally dig the look of them with the satin finish and especially like the newer rounded neck profile. I just received mine in the mail and I must say Im absolutely impressed with every aspect of it! Right out of the box the action is great, the feel of the guitar is amazing with the satin finish and it plays and sounds great! I inspected it for blemishes or flaws but it is absolutely exceptional! Happy to have this in my collection and definitely think Gibson had a great offering with these models!',
    },
    {
        instrument_id: 7,
        user_id: 2,
        comment: 'Wonderful guitar! Light and comfortable to play. And the tone. The TONE. Its a rock machine.',
    },
    {
        instrument_id: 8,
        user_id: 3,
        comment: 'I just got it, and its awesome! I have over 10 different guitars, including the Gibson Explorer, but this thing stands out from the rest. I have wanted this guitar since day one, from several different musical artists such as Metallica, and Jimi Hendrix. At first I thought it would be like any other guitar and just be about flash, but now that I have seen it in person, this guitar is the one!',
    },
    {
        instrument_id: 9,
        user_id: 3,
        comment: '...a fantastic guitar. Im glad to say this is my first real guitar. The build quality is fantastic',
    },
    {
        instrument_id: 10,
        user_id: 2,
        comment: 'I purchased this almost 10 months ago, but ESP took forever to make them. I was totally excited to get this in finally, but that excitement turned into real disappointment quickly. First, the quality is good. Frets were perfect, finish was flawless, everything was tight. I didnt play it through an amp because I knew I wasnt keeping it so I cant say anything about sound quality. The issue is in the playability. This guitar has serious neck dive and the way it sits on you because the strap button is in the back, it kind of falls forward. So now you have a neck diving guitar angled away from you. So craftmanship is there, but the actual design of the guitar is just horrible. This is my first Phoenix, but not my first LTD.',
    },
    {
        instrument_id: 11,
        user_id: 1,
        comment: 'Amazing sounding guitar! Have owned many 12 strings throughout my life, but this one is the most unique sounding Ive ever heard!',
    },
    {
        instrument_id: 12,
        user_id: 1,
        comment: 'I was a preorder from the first few hours in October who finally is able to play on this amazing instrument. My first nylon string and it is absolutely blowing me away. Sound reviews on YouTube or wherever on the internet do not do it justice. This is a great sounding nylon and was worth the 6 month wait. I highly recommend this instrument to anyone who is interested in getting into nylon string guitars.',
    },
    {
        instrument_id: 13,
        user_id: 1,
        comment: 'Very satisfied with my purchase of the Vintage Hummingbird!',
    },
    {
        instrument_id: 14,
        user_id: 1,
        comment: 'Best Acoustic in this price range! Rich, full-bodied tone that sings for days!',
    },
    {
        instrument_id: 1,
        user_id: 1,
        comment: 'Slapped new strings on it and took it straight to a show. Very easy to play, with balanced tone. Surprisingly good projection considering the size. Love it!!',
    }
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;