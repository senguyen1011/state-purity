const PurityQuestions = [
  {
    content: "Held hands romantically?",
    weight: 1
  },
  {
    content: "Been on a date?",
    weight: 1
  },
  {
    content: "Been in a relationship?",
    weight: 1
  },
  {
    content: "Danced without leaving room for Jesus?",
    weight: 1
  },
  {
    content: "Kissed a non-family member?",
    weight: 1
  },
  {
    content: "Kissed a non-family member on the lips?",
    weight: 1
  },
  {
    content: "French kissed?",
    weight: 1
  },
  {
    content: "French kissed in public?",
    weight: 2
  },
  {
    content: "Kissed on the neck?",
    weight: 2
  },
  {
    content: "Kissed horizontally?",
    weight: 2
  },
  {
    content: "Given or received a hickey?",
    weight: 2
  },
  {
    content: "Kissed or been kissed on the breast?",
    weight: 2
  },
  {
    content: "Kissed someone below the belt?",
    weight: 2
  },
  {
    content: "Kissed for more than two hours consecutively?",
    weight: 2
  },
  {
    content: "Played a game involving stripping?",
    weight: 3
  },
  {
    content: "Seen or been seen by another person in a sensual context?",
    weight: 1
  },
  {
    content: "Masturbated?",
    weight: 2
  },
  {
    content: "Masturbated to a picture or video?",
    weight: 2
  },
  {
    content: "Masturbated while someone else was in the room?",
    weight: 4
  },
  {
    content: "Been caught masturbating?",
    weight: 2
  },
  {
    content: "Masturbated with an inanimate object?",
    weight: 3
  },
  {
    content: "Seen or read pornographic material?",
    weight: 1
  },
  {
    content: "Massaged or been massaged sensually?",
    weight: 1
  },
  {
    content: "Gone through the motions of intercourse while fully dressed?",
    weight: 2
  },
  {
    content: "Undressed or been undressed by a member of the perferred sex?",
    weight: 2
  },
  {
    content: "Showered with a member of the perferred sex?",
    weight: 2
  },
  {
    content: "Fondled or had your butt cheeks fondled?",
    weight: 2
  },
  {
    content: "Fondled or had your breasts fondled?",
    weight: 2
  },
  {
    content: "Fondled or had your genitals fondled?",
    weight: 2
  },
  {
    content: "Had or given \"blue balls?\"",
    weight: 2
  },
  {
    content: "Had an orgasm due to someone else's manipulation?",
    weight: 2
  },
  {
    content: "Sent a sexually explicit text or instant message?",
    weight: 2
  },
  {
    content: "Sent or received sexually explicit photographs?",
    weight: 3
  },
  {
    content: "Engaged in sexually explicit activity over video chat?",
    weight: 4
  },
  {
    content: "Cheated on a significant other during a relationship?",
    weight: 5
  },
  {
    content: "Purchased contraceptives?",
    weight: 1
  },
  {
    content: "Engaged in fellatio?",
    weight: 2
  },
  {
    content: "Engaged in cunnilingus?",
    weight: 2
  },
  {
    content: "Ingested someone else's genital secretion?",
    weight: 3
  },
  {
    content: "Used a sex toy with a partner?",
    weight: 4
  },
  {
    content: "Spent the night with a member of the perferred sex?",
    weight: 1
  },
  {
    content: "Been walked in on while engaging in a sexual act?",
    weight: 2
  },
  {
    content: "Kicked a roommate out to commit a sexual act?",
    weight: 3
  },
  {
    content: "Ingested alcohol in a non-religious context?",
    weight: 1
  },
  {
    content: "Played a drinking game?",
    weight: 1
  },
  {
    content: "Been drunk?",
    weight: 1
  },
  {
    content: "Faked sobriety to parents or teachers?",
    weight: 1
  },
  {
    content: "Had severe memory loss due to alcohol?",
    weight: 3
  },
  {
    content: "Used tobacco?",
    weight: 1
  },
  {
    content: "Used marijuana?",
    weight: 2
  },
  {
    content: "Used a drug stronger than marijuana?",
    weight: 3
  },
  {
    content: "Used methamphetamine, crack cocaine, PCP, horse tranquilizers, or heroin?",
    weight: 5
  },
  {
    content: "Been sent to the office of a principal, dean, or judicial affairs representative for a disciplinary infraction?",
    weight: 2
  },
  {
    content: "Been put on disciplinary probation or suspended?",
    weight: 2
  },
  {
    content: "Urinated in public?",
    weight: 1
  },
  {
    content: "Gone skinny-dipping?",
    weight: 1
  },
  {
    content: "Gone streaking?",
    weight: 3
  },
  {
    content: "Seen a stripper?",
    weight: 2
  },
  {
    content: "Had the police called on you?",
    weight: 3
  },
  {
    content: "Run from the police?",
    weight: 4
  },
  {
    content: "Had the police question you?",
    weight: 2
  },
  {
    content: "Had the police handcuff you?",
    weight: 4
  },
  {
    content: "Been arrested?",
    weight: 4
  },
  {
    content: "Been convicted of a crime?",
    weight: 5
  },
  {
    content: "Been convicted of a felony?",
    weight: 5
  },
  {
    content: "Committed an act of vandalism?",
    weight: 1
  },
  {
    content: "Had sexual intercourse?",
    weight: 2
  },
  {
    content: "Had sexual intercourse 3 or more times in 1 night?",
    weight: 3
  },
  {
    content: "?",
    weight: 3
  },
  {
    content: "Had sexual intercourse 10 or more times?",
    weight: 3
  },
  {
    content: "Had sexual intercourse in 4 or more positions?",
    weight: 3
  },
  {
    content: "Had sexual intercourse with a stranger or person you met within 24 hours?",
    weight: 5
  },
  {
    content: "Had sexual intercourse in a motor vehicle?",
    weight: 3
  },
  {
    content: "Had sexual intercourse outdoors?",
    weight: 3
  },
  {
    content: "Had sexual intercourse in public?",
    weight: 4
  },
  {
    content: "Had sexual intercourse in a swimming pool or hot tub?",
    weight: 3
  },
  {
    content: "Had sexual intercourse in a bed not belonging to you or your partner?",
    weight: 4
  },
  {
    content: "Had sexual intercourse while you or your partner's parents were in the same home?",
    weight: 3
  },
  {
    content: "Had sexual intercourse with non-participating third party in the same room?",
    weight: 4
  },
  {
    content: "Joined the mile high club?",
    weight: 4
  },
  {
    content: "Partcipated in a \"booty call\" with a partner whom you were not in a relationship with?",
    weight: 4
  },
  {
    content: "Traveled 100 or more miles for the primary purpose of sexual intercourse?",
    weight: 4
  },
  {
    content: "Had sexual intercourse with a partner with a 3 or more year age difference?",
    weight: 3
  },
  {
    content: "Had sexual intercourse with a virgin?",
    weight: 2
  },
  {
    content: "Had a sexual intercourse without a condom?",
    weight: 4
  },
  {
    content: "Had a STI test due to a reasonable suspicion?",
    weight: 2
  },
  {
    content: "Had a STI?",
    weight: 3
  },
  {
    content: "Had a threesome?",
    weight: 5
  },
  {
    content: "Attended an orgy?",
    weight: 5
  },
  {
    content: "Had 2 or more distinct acts of sexual intercourse with 2 or more people within 24 hours?",
    weight: 5
  },
  {
    content: "Had sexual intercourse with 5 or more partners?",
    weight: 4
  },
  {
    content: "Been photographed or filmed during sexual intercourse by yourself or others?",
    weight: 4
  },
  {
    content: "Had period sex?",
    weight: 4
  },
  {
    content: "Had anal sex?",
    weight: 4
  },
  {
    content: "Had a pregnancy scare?",
    weight: 3
  },
  {
    content: "Impregnated someone or been impregnated?",
    weight: 4
  },
  {
    content: "Paid or been paid for a sexual act?",
    weight: 4
  },
  {
    content: "Committed an act of voyeurism?",
    weight: 4
  },
  {
    content: "Committed an act of incest?",
    weight: 5
  },
  {
    content: "Engaged in bestiality?",
    weight: 5
  }
];

export default PurityQuestions;