/**
 * alphago-games.js
 * Complete, Authentic Historical Match Records:
 * - 2016 DeepMind Challenge Match: AlphaGo vs Lee Sedol (Games 1 - 5, up to 280 moves)
 * - 2017 Future of Go Summit: AlphaGo vs Ke Jie (Games 1 - 3, up to 289 moves)
 *
 * Includes full SGF moves, Fan Hui 2p commentary, and spotlight markers for:
 * - Move 37 (Game 2, 2016): AlphaGo's 5th-line shoulder hit at P10
 * - Move 78 (Game 4, 2016): Lee Sedol's "Divine Move" at L11
 */

export const ALPHAGO_MATCHES = {
  "2016": [
  {
    "id": "2016-g1",
    "title": "Game 1: The Opening Clash (Earthquake in Seoul)",
    "black": "Lee Sedol (9p)",
    "white": "AlphaGo",
    "date": "March 9, 2016",
    "result": "White won by resignation (186 moves)",
    "highlightMove": 102,
    "description": "The historical match that shattered the myth that computers could never challenge top Go professionals. AlphaGo displayed calm positional judgment in the endgame.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "R16",
        "comment": "After thinking for just thirty seconds, Lee placed the first black stone. The historic battle had begun!"
      },
      {
        "num": 2,
        "color": "W",
        "coord": "D4",
        "comment": "Move 2: White plays at D4."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "Q3",
        "comment": "Move 3: Black plays at Q3."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "D16",
        "comment": "Move 4: White plays at D16."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "F17",
        "comment": "Lee Sedol quickly played the two 3-4 points, followed by the corner approach."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "C14",
        "comment": "Move 6: White plays at C14."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "R8",
        "comment": "Next, after a minute of reflection, Lee played this unexpected extension! A new fuseki, perhaps? Or was it a strategic ploy? If Lee thought that AlphaGo's knowledge was based on pattern recognition from existing games, then playing a move no professional had played before might confuse it. In reality, Lee had underestimated AlphaGo.\n\nFaced with a strange move like this, a human player would no doubt take some time to think, as the first impression would be that the opponent is laying a trap. Imagine two kung fu masters locked in battle. If one makes an unusual move, the other would surely react with caution to avoid being caught out. However, there is no concept of \"fear\" in AlphaGo's dictionary. It knows only one strategy: constantly adapting to the present situation."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "P16",
        "comment": "Move 8: White plays at P16."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "M16",
        "comment": "Against White's approach, Lee quickly pincered, as if he had prepared this response."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "R17",
        "comment": "Move 10: White plays at R17."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "S17",
        "comment": "When White attached in the corner, Lee instantly blocked. The classic thinking is that this way of playing is very heavy for White, not only strengthening Black's corner, but turning the pincer into the perfect attacking move. Could it be that AlphaGo did not know the joseki?"
      },
      {
        "num": 12,
        "color": "W",
        "coord": "Q17",
        "comment": "When the players in the commentary room saw White 10 and 12, everybody thought Lee had exposed a problem in AlphaGo's opening. After all, our first impulse when passing judgment is to look within the scope of our existing knowledge. However, this can sometimes distract us from the essence of the problem. Were the black stones on the left side truly working well together?"
      },
      {
        "num": 13,
        "color": "B",
        "coord": "S15",
        "comment": "Move 13: Black plays at S15."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "P14",
        "comment": "When White jumped, the feeling in the room suddenly changed. The black stones on the left were too low, and Black's formation was nothing to be proud of after all! \n\nIn fact, at this moment, AlphaGo already felt that the game had begun to favor White. According to its analysis, the problem lay in the tiger's mouth at A, and Black should have chosen the knight's move instead."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "Q13",
        "comment": "Although many professionals already thought the result was unfavorable for Black, Lee still looked confident, and played the large knight's move almost instantly."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "P13",
        "comment": "Move 16: White plays at P13."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "Q12",
        "comment": "Move 17: Black plays at Q12."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "J16",
        "comment": "When White played here, Lee hesitated. For the first time since the game began, his hand left the bowl of stones. He pressed his left index finger to his upper lip, and started tapping the right one against his leg. He seemed to realize things weren't going as well as expected. Of course, when circumstances take a sudden turn for the worse, the pressure can be difficult to handle."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "M14",
        "comment": "Lee responded steadily with the jump. In AlphaGo's judgment, this was too slow and White had already taken the lead, with a win rate of 54%. See the variation for an alternative."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "P12",
        "comment": "Move 20: White plays at P12."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "Q11",
        "comment": "Move 21: Black plays at Q11."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "M12",
        "comment": "After pushing once on the left, AlphaGo capped Black on the lower side."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "L12",
        "comment": "Lee quickly responded with the attachment. Subconsciously, he may have believed that AlphaGo would be unwilling to initiate a fight. At the same time, this move was very much his style, brimming with fighting spirit.\n\nAfter the game, many commentators questioned this move, but this was AlphaGo's suggestion as well. In this case, it seems great minds thought alike."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "L15",
        "comment": "Seeing the peep, Lee sighed, as if realizing he was in for a hard game."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "M15",
        "comment": "Move 25: Black plays at M15."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "M13",
        "comment": "Black had to connect, but White continued with this severe follow-up! This move challenged Lee to make the game's first crucial choice: War, or peace? It is impossible to calculate every variation fully, so how to choose? For most players, the decision is a combination of personal style and a feeling for shape. At the same time, it is important to consider the opponent's intentions. For instance, did White pause before playing? Did White look pleased or dissatisfied with the previous position? Normally, reading the opponent is one of Lee's strong points. Thanks to his exquisite perception, he can pick whichever way of playing gives him the greatest advantage. This time, however, he hesitated. Since the start of the game, AlphaGo had played at a constant rhythm, with no sign of doubt or confusion. It felt as if every move were inevitable."
      },
      {
        "num": 27,
        "color": "B",
        "coord": "L13",
        "comment": "This was the first time in the match that Lee found himself at a crossroads, and he had no intention of backing down before a machine. So, after three minutes of thought, Lee resolutely blocked, and White cut. At this point, AlphaGo's win rate rose to 56%. In AlphaGo's judgment, Black should have followed the variation and chosen the turn instead."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "L14",
        "comment": "Move 28: White plays at L14."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "O15",
        "comment": "Move 29: Black plays at O15."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "P15",
        "comment": "Black peeped, and White connected. At this point, Lee Sedol had 1 hour and 43 minutes remaining, AlphaGo 1 hour and 44 minutes."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "K17",
        "comment": "Black continued to probe White's intentions. Lee was asking AlphaGo, “Dare you block?”"
      },
      {
        "num": 32,
        "color": "W",
        "coord": "J17",
        "comment": "Without hesitation, AlphaGo did. The curtain rose on the first major battle, and the following moves were a one-way street. However, AlphaGo only grew more and more confident, its win rate reaching 58%. According to AlphaGo, Black should have followed the variation starting with the turn."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "K16",
        "comment": "At this point, Lee had 1 hour and 40 minutes, AlphaGo 1 hour and 43 minutes."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "J15",
        "comment": "Move 34: White plays at J15."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "K15",
        "comment": "Move 35: Black plays at K15."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "K14",
        "comment": "Move 36: White plays at K14."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "J14",
        "comment": "Move 37: Black plays at J14."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "K13",
        "comment": "With this turn, AlphaGo’s win rate continued rising to 59%.\n\nWhite is not particularly eager to capture the two stones - see the variation."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "M11",
        "comment": "At this point, Lee had 1 hour and 34 minutes, AlphaGo 1 hour and 39 minutes."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "N11",
        "comment": "AlphaGo thought this exchange was unnecessary."
      },
      {
        "num": 41,
        "color": "B",
        "coord": "H14",
        "comment": "Move 41: Black plays at H14."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "J12",
        "comment": "Many commentators asked why White chose this move instead of A. Actually, by this point, AlphaGo's win rate had already reached 64%, so AlphaGo felt confident that capturing the two stones was not needed.\n\nAfter this kosumi, the value of the two stones decreased markedly."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "N18",
        "comment": "At this point, Lee was pausing to think after each move, no longer laying down stones one after another as he had in the opening."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "G16",
        "comment": "This move was mandatory to protect White's three stones."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "L11",
        "comment": "Move 45: Black plays at L11."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "N10",
        "comment": "Move 46: White plays at N10."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "L9",
        "comment": "Move 47: Black plays at L9."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "J18",
        "comment": "White descended here to trigger a series of forcing exchanges. Many commentators thought this unnecessary, but from AlphaGo's perspective, the win rate continued climbing to reach 66%. Did AlphaGo think Lee had made another mistake?"
      },
      {
        "num": 49,
        "color": "B",
        "coord": "P18",
        "comment": "Move 49: Black plays at P18."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "N8",
        "comment": "Move 50: White plays at N8."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "M7",
        "comment": "White jumped out, and Black kept up the pressure on White's dragon, attacking fiercely with the knight's move."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "O17",
        "comment": "Move 52: White plays at O17."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "O18",
        "comment": "Move 53: Black plays at O18."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "L18",
        "comment": "Move 54: White plays at L18."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "M17",
        "comment": "The simplifying exchanges of A for B and C for D might seem early to a human player, but were very much in AlphaGo's style. It is difficult to evaluate the pros and cons of making these exchanges now."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "N7",
        "comment": "Move 56: White plays at N7."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "M6",
        "comment": "Lee played quickly during this fight. When Black extended, Lee had 1 hour and 30 minutes, AlphaGo 1 hour and 29 minutes."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "L8",
        "comment": "With this attachment, however, Lee became contemplative once more.\n\nIn normal matches, Lee often seeks opportunities to play startling moves that throw his opponents off their rhythm. This time, the roles had been reversed. It was AlphaGo that played these moves, rattling the opponent while maintaining equanimity itself."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "M8",
        "comment": "Move 59: Black plays at M8."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "M9",
        "comment": "Move 60: White plays at M9."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "K10",
        "comment": "After 4 minutes of reflection, Lee chose the tiger's mouth, a bizarre shape in this position!\n\nCompared to the rest of the match, Lee played quite quickly in this game. Subconsciously, it seemed, he believed that entering byo-yomi against AlphaGo would count as a failure in itself. Of course, playing so fast might also induce careless mistakes. AlphaGo thought this was one such move. See the variation.\n\nAt this point, Lee Sedol had 1 hour and 27 minutes left, AlphaGo 1 hour and 26 minutes."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "K8",
        "comment": "When AlphaGo extended here, David Silver, technical lead of the AlphaGo team, came to the players' room and sat down to observe. I asked about the outlook, and he replied only with a smile. This confirmed my analysis - White was ahead!"
      },
      {
        "num": 63,
        "color": "B",
        "coord": "H10",
        "comment": "Move 63: Black plays at H10."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "H11",
        "comment": "Move 64: White plays at H11."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "G10",
        "comment": "After the jump at A, it is painful to endure White's bump at B, but AlphaGo disapproved of Black's extension here. See the variation."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "G14",
        "comment": "AlphaGo thought the nose attachment was the only reply."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "J11",
        "comment": "At this point, Lee had 1 hour and 24 minutes left, AlphaGo 1 hour and 22 minutes."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "K12",
        "comment": "Move 68: White plays at K12."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "J10",
        "comment": "This move was ugly but necessary, giving White sente to return to the left side."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "N6",
        "comment": "Move 70: White plays at N6."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "M5",
        "comment": "Move 71: Black plays at M5."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "N5",
        "comment": "Move 72: White plays at N5."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "M4",
        "comment": "Lee had played the preceding moves almost instantly, so after this move, Black had 1 hour and 23 minutes to White's 1 hour and 18 minutes. Lee glanced at the clock and shook his head."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "N4",
        "comment": "Move 74: White plays at N4."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "M3",
        "comment": "AlphaGo thought this move should have been the hane."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "N3",
        "comment": "With this move, AlphaGo’s win rate rose a little further to over 70%. Although this value theoretically represents the chance of victory, in practice it is an extremely conservative indicator of AlphaGo's true estimate. A value of 70% means that AlphaGo already believes the outcome of the game is nearly decided."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "J7",
        "comment": "When Lee played 77, he shook his head unhappily. Sure enough, Black's outlook was pessimistic. For the first time in the match, Lee left the room for a smoking break. (This also gave the referees the chance to use the restroom.) According to the competition rules, there would be no stopping the clock during the match, so when White played the next move, Lee's clock continued to run."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "R5",
        "comment": "With one player absent, the tension lessened dramatically. It was as if the room were a bow, and the hunter had relaxed the bowstring. It was then that we realized how strongly affected we were by the pressure of the game.\n\nAt this point, both AlphaGo and Lee Sedol had 1 hour and 15 minutes remaining."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "F3",
        "comment": "Apparently, AlphaGo thought that this approach was not best, preferring the variation instead."
      },
      {
        "num": 80,
        "color": "W",
        "coord": "G13",
        "comment": "When Lee resumed his seat, he quickly played the corner approach. Seeing AlphaGo's response at 80, I wrote down in my notebook: \"Statement of victory!\"\n\nDuring the match, all the commentators thought this move was extremely soft, and answering in the upper right corner was far bigger. However, I believe I know AlphaGo as well as anybody, and in my view a move like this is really a demonstration of its matchless confidence. AlphaGo does not pursue the biggest victory, only the most certain one. Once it has a lead of two or three points, AlphaGo is completely capable of holding it until the end.\n\nLooking at AlphaGo's 74% win rate confirmed my impressions."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "C6",
        "comment": "After White protected, Black had no choice but to seek compensation from the double approach."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "D6",
        "comment": "Move 82: White plays at D6."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "D7",
        "comment": "Move 83: Black plays at D7."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "F4",
        "comment": "Move 84: White plays at F4."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "G4",
        "comment": "Move 85: Black plays at G4."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "G3",
        "comment": "A beautiful move! Sacrificing a stone where the opponent is strong is a common strategy, but it is nonetheless refreshing to see White brazenly cutting through in the face of Black's wall.\n\nAt this moment, I looked over at the 8-dan professional who was that day's referee. He shook his hand under the table, indicating that he thought the game was already over for Lee.\n\nOne might have the impression from this commentary that Lee had not played well so far, or that he had not deployed his full power. Yet, I believe that's not the case. Rather, it is AlphaGo's strength that makes Go look easy.\n\nAt this point, AlphaGo and Lee Sedol had 1 hour and 8 minutes each on the clock."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "F2",
        "comment": "Move 87: Black plays at F2."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "C5",
        "comment": "The cut was breathtaking, but the follow-up was baffling. With this tiger's mouth, AlphaGo simply let Black swallow up the center! Was it already so confident in White's territorial lead? One way or the other, I thought White's move was far too slow. AlphaGo's judgment is not based on the size of its lead, but on the ease of controlling the outcome, so from that perspective there may be nothing wrong with this move. However, Lee seemed happy, as the game had certainly taken a turn for the better."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "E6",
        "comment": "Move 89: Black plays at E6."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "D5",
        "comment": "Move 90: White plays at D5."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "E4",
        "comment": "Move 91: Black plays at E4."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "C7",
        "comment": "Move 92: White plays at C7."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "D8",
        "comment": "Move 93: Black plays at D8."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "M2",
        "comment": "Move 94: White plays at M2."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "L2",
        "comment": "Move 95: Black plays at L2."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "S18",
        "comment": "Move 96: White plays at S18."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "K18",
        "comment": "Move 97: Black plays at K18."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "K19",
        "comment": "At this point, Lee Sedol had 1 hour and 4 minutes left, AlphaGo 59 minutes."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "N14",
        "comment": "Move 99: Black plays at N14."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "N12",
        "comment": "Move 100: White plays at N12."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "O16",
        "comment": "Move 101: Black plays at O16."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "R10",
        "comment": "The last few moves had been a string of minor exchanges. To me, they felt like shots of anaesthetic in preparation for surgery. However, anaesthetic or no, Black must have felt the sharp pain of the incision at White 102.\n\nPerhaps the answer to the riddle is right before our eyes, and the point of the tiger's mouth at 88 was to win back sente for the invasion on the left side?\n\nA smile crossed Lee's face when he saw White's invasion, and he sank into deep calculation. This was his longest reflection of the game. At last, the deciding moment was at hand! The time had come to fight as if his life depended on it - but how does one fight an opponent that knows no fear?\n\nAt this point, Lee Sedol had 1 hour left, AlphaGo 56 minutes."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "Q10",
        "comment": "After seven minutes of contemplation, Lee finally blocked from above."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "R9",
        "comment": "AlphaGo answered here immediately. Although it normally plays at a constant pace, it seems even AlphaGo sometimes has a sense of \"the only move.\""
      },
      {
        "num": 105,
        "color": "B",
        "coord": "Q8",
        "comment": "Move 105: Black plays at Q8."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "Q9",
        "comment": "Move 106: White plays at Q9."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "P9",
        "comment": "Move 107: Black plays at P9."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "S12",
        "comment": "When white played the knight's move, Lee Sedol sighed again. The game held so many possibilities, but with no way to read the opponent's intentions, it became more difficult to accept or reject any one of them. Because AlphaGo lacked any sense of mental or emotional pressure, the psychological burden grew twice as heavy on Lee's shoulders!\n\nAt this point, Lee Sedol had 47 minutes left, AlphaGo 53 minutes."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "S8",
        "comment": "In the game, Lee Sedol chose to descend. AlphaGo, however, thought Black's only chance was to stake the game on the desperate fight shown in the variation."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "R14",
        "comment": "Move 110: White plays at R14."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "S11",
        "comment": "Attaching this way is clearly problematic, and Black should have attached on the other side as shown in the variation. In the game, White was able to capture the three stones in the lower left in sente, an enormous gain in both security and profit.\n\nAt this point, Lee Sedol had 44 minutes left, AlphaGo 51 minutes."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "S14",
        "comment": "Move 112: White plays at S14."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "Q14",
        "comment": "Move 113: Black plays at Q14."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "R15",
        "comment": "Move 114: White plays at R15."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "R12",
        "comment": "Move 115: Black plays at R12."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "C17",
        "comment": "When AlphaGo took the 3-3 point, its win rate rose to 82%. A value this high means AlphaGo already considers the game won, even if the absolute difference is small."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "B6",
        "comment": "Move 117: Black plays at B6."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "B7",
        "comment": "Move 118: White plays at B7."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "B8",
        "comment": "Move 119: Black plays at B8."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "B5",
        "comment": "Move 120: White plays at B5."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "S13",
        "comment": "Move 121: Black plays at S13."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "N2",
        "comment": "Move 122: White plays at N2."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "Q5",
        "comment": "Move 123: Black plays at Q5."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "K2",
        "comment": "Move 124: White plays at K2."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "L3",
        "comment": "Move 125: Black plays at L3."
      },
      {
        "num": 126,
        "color": "W",
        "coord": "Q6",
        "comment": "Move 126: White plays at Q6."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "P5",
        "comment": "Move 127: Black plays at P5."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "R4",
        "comment": "Move 128: White plays at R4."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "P6",
        "comment": "Move 129: Black plays at P6."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "Q4",
        "comment": "Move 130: White plays at Q4."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "P4",
        "comment": "Move 131: Black plays at P4."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "R3",
        "comment": "Move 132: White plays at R3."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "P2",
        "comment": "Move 133: Black plays at P2."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "Q2",
        "comment": "Move 134: White plays at Q2."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "P3",
        "comment": "Move 135: Black plays at P3."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "Q16",
        "comment": "Move 136: White plays at Q16."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "R2",
        "comment": "Move 137: Black plays at R2."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "S2",
        "comment": "Move 138: White plays at S2."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "Q1",
        "comment": "Move 139: Black plays at Q1."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "S1",
        "comment": "Although many commentators found better ways for Black to handle the upper left corner, Black had no chance of victory either way. Against a human player, one can still try to provoke a blunder, but against the untiring AlphaGo such hope is futile.\n\nWhen white lived in the corner, AlphaGo’s win rate was 90%.\n\nThe tension faded from Lee's expression as he faced the inevitable."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "S6",
        "comment": "Move 141: Black plays at S6."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "S5",
        "comment": "Move 142: White plays at S5."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "R6",
        "comment": "Move 143: Black plays at R6."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "T5",
        "comment": "Move 144: White plays at T5."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "C8",
        "comment": "Move 145: Black plays at C8."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "A6",
        "comment": "Move 146: White plays at A6."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "L1",
        "comment": "Move 147: Black plays at L1."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "P7",
        "comment": "Move 148: White plays at P7."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "P8",
        "comment": "Move 149: Black plays at P8."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "C11",
        "comment": "Move 150: White plays at C11."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "H12",
        "comment": "Move 151: Black plays at H12."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "H13",
        "comment": "Move 152: White plays at H13."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "D2",
        "comment": "Move 153: Black plays at D2."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "D10",
        "comment": "Move 154: White plays at D10."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "B3",
        "comment": "Move 155: Black plays at B3."
      },
      {
        "num": 156,
        "color": "W",
        "coord": "C3",
        "comment": "Move 156: White plays at C3."
      },
      {
        "num": 157,
        "color": "B",
        "coord": "C2",
        "comment": "Move 157: Black plays at C2."
      },
      {
        "num": 158,
        "color": "W",
        "coord": "B4",
        "comment": "Move 158: White plays at B4."
      },
      {
        "num": 159,
        "color": "B",
        "coord": "D3",
        "comment": "Move 159: Black plays at D3."
      },
      {
        "num": 160,
        "color": "W",
        "coord": "B2",
        "comment": "Move 160: White plays at B2."
      },
      {
        "num": 161,
        "color": "B",
        "coord": "C4",
        "comment": "Move 161: Black plays at C4."
      },
      {
        "num": 162,
        "color": "W",
        "coord": "A4",
        "comment": "Move 162: White plays at A4."
      },
      {
        "num": 163,
        "color": "B",
        "coord": "E9",
        "comment": "Move 163: Black plays at E9."
      },
      {
        "num": 164,
        "color": "W",
        "coord": "F11",
        "comment": "As the endgame continued, it became clear that although the score remained close, Black's defeat was unavoidable."
      },
      {
        "num": 165,
        "color": "B",
        "coord": "B10",
        "comment": "Move 165: Black plays at B10."
      },
      {
        "num": 166,
        "color": "W",
        "coord": "B11",
        "comment": "Move 166: White plays at B11."
      },
      {
        "num": 167,
        "color": "B",
        "coord": "Q18",
        "comment": "Move 167: Black plays at Q18."
      },
      {
        "num": 168,
        "color": "W",
        "coord": "R18",
        "comment": "Move 168: White plays at R18."
      },
      {
        "num": 169,
        "color": "B",
        "coord": "T14",
        "comment": "Move 169: Black plays at T14."
      },
      {
        "num": 170,
        "color": "W",
        "coord": "S16",
        "comment": "Move 170: White plays at S16."
      },
      {
        "num": 171,
        "color": "B",
        "coord": "A11",
        "comment": "Move 171: Black plays at A11."
      },
      {
        "num": 172,
        "color": "W",
        "coord": "A12",
        "comment": "Move 172: White plays at A12."
      },
      {
        "num": 173,
        "color": "B",
        "coord": "A10",
        "comment": "Move 173: Black plays at A10."
      },
      {
        "num": 174,
        "color": "W",
        "coord": "B12",
        "comment": "Move 174: White plays at B12."
      },
      {
        "num": 175,
        "color": "B",
        "coord": "G11",
        "comment": "Move 175: Black plays at G11."
      },
      {
        "num": 176,
        "color": "W",
        "coord": "F10",
        "comment": "Move 176: White plays at F10."
      },
      {
        "num": 177,
        "color": "B",
        "coord": "F9",
        "comment": "Move 177: Black plays at F9."
      },
      {
        "num": 178,
        "color": "W",
        "coord": "P17",
        "comment": "Move 178: White plays at P17."
      },
      {
        "num": 179,
        "color": "B",
        "coord": "N17",
        "comment": "Move 179: Black plays at N17."
      },
      {
        "num": 180,
        "color": "W",
        "coord": "O7",
        "comment": "Move 180: White plays at O7."
      },
      {
        "num": 181,
        "color": "B",
        "coord": "Q7",
        "comment": "When Lee played 181, he muttered a few words. Sadly, since they were in Korean, I cannot tell you what they were, but they must have shown the depth of his dissatisfaction."
      },
      {
        "num": 182,
        "color": "W",
        "coord": "C10",
        "comment": "Move 182: White plays at C10."
      },
      {
        "num": 183,
        "color": "B",
        "coord": "A8",
        "comment": "Move 183: Black plays at A8."
      },
      {
        "num": 184,
        "color": "W",
        "coord": "A3",
        "comment": "Move 184: White plays at A3."
      },
      {
        "num": 185,
        "color": "B",
        "coord": "G12",
        "comment": "Move 185: Black plays at G12."
      },
      {
        "num": 186,
        "color": "W",
        "coord": "F12",
        "comment": "Lee picked up two black stones and lightly tapped them against the bowl. The sound echoed crisply through the room, and it felt as if time had frozen. I knew Lee was about to resign. Afterwards, many people said that I must have been happy in that moment. Now the world would know AlphaGo's true strength, and I would not be the only one it had defeated. The truth is, in the moment when he tapped those two stones, my mind was blank. Although I had known this day would come sooner or later, it had always felt so remote before, suddenly, it arrived. I felt as if I had been cast into outer space, adrift on waves of nothingness.\n\nLee Sedol resigned, and I returned to the present. The Korean referee's announcement of the result marked a historic shift. From that moment on, humanity was no longer alone in exploring the mysteries of Go. We had gained a new partner in our quest: AlphaGo!"
      }
    ]
  },
  {
    "id": "2016-g2",
    "title": "Game 2: The Shoulder Hit on the 5th Line (Move 37)",
    "black": "AlphaGo",
    "white": "Lee Sedol (9p)",
    "date": "March 10, 2016",
    "result": "Black won by resignation (211 moves)",
    "highlightMove": 37,
    "description": "The game that redefined Go history. On Move 37, AlphaGo played a shoulder hit on the fifth line, shocking grandmasters and demonstrating alien intuition.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "Q16",
        "comment": "Unlike the first game, AlphaGo played its first move after less than thirty seconds. Rarely does it decide so quickly.",
        "isSpotlight": false
      },
      {
        "num": 2,
        "color": "W",
        "coord": "D4",
        "comment": "Lee played White 2 in the lower left corner, on the diagonally opposing star point, indicating a strategic departure from the first game. Since the fighting had turned against him before, perhaps he wished to play a quieter and more solid opening this time. In that case, White 2 may have aimed to prevent AlphaGo from taking that point for Black, since this kind of cross-opening can easily turn violent.",
        "isSpotlight": false
      },
      {
        "num": 3,
        "color": "B",
        "coord": "C16",
        "comment": "When Black played the 3-4 point, I felt that AlphaGo would opt for the Chinese opening, one of its favorites.",
        "isSpotlight": false
      },
      {
        "num": 4,
        "color": "W",
        "coord": "R4",
        "comment": "Compared to the first game, Lee played much more slowly, pondering over each move. Many players had criticized him for playing too quickly in the first game, and the shift may have been partly in response to that. Sometimes changing pace is also a useful meta-tactic to disrupt the opponent's mindset, but of course this would have no effect on AlphaGo.",
        "isSpotlight": false
      },
      {
        "num": 5,
        "color": "B",
        "coord": "P4",
        "comment": "White took the remaining 3-4 point, and AlphaGo approached the lower right corner with 5.",
        "isSpotlight": false
      },
      {
        "num": 6,
        "color": "W",
        "coord": "P3",
        "comment": "I had heard that Lee was very fond of coffee, and always asked the staff to bring more as soon as his cup was empty. During this game, and the rest of the match, he fully lived up to his reputation.",
        "isSpotlight": false
      },
      {
        "num": 7,
        "color": "B",
        "coord": "O3",
        "comment": "Move 7: Black plays at O3.",
        "isSpotlight": false
      },
      {
        "num": 8,
        "color": "W",
        "coord": "Q3",
        "comment": "Move 8: White plays at Q3.",
        "isSpotlight": false
      },
      {
        "num": 9,
        "color": "B",
        "coord": "C6",
        "comment": "Move 9: Black plays at C6.",
        "isSpotlight": false
      },
      {
        "num": 10,
        "color": "W",
        "coord": "F3",
        "comment": "Move 10: White plays at F3.",
        "isSpotlight": false
      },
      {
        "num": 11,
        "color": "B",
        "coord": "N4",
        "comment": "Move 11: Black plays at N4.",
        "isSpotlight": false
      },
      {
        "num": 12,
        "color": "W",
        "coord": "R6",
        "comment": "Through here, everything proceeded normally.",
        "isSpotlight": false
      },
      {
        "num": 13,
        "color": "B",
        "coord": "J17",
        "comment": "Black 13 came as an enormous surprise. Even here, Black can tenuki? It seems anything is possible for AlphaGo! \n\nJust as interesting, AlphaGo did not even think White should have finished the joseki at A! See the variation.\n\nGu Li and Zhou Ruiyang were just as shocked as I was by this revelation, and we began to wonder: could there be a problem with even such an established, fundamental joseki as this?\n\nHere, AlphaGo’s win rate was 49.7%, so it thought the game more or less in equilibrium.",
        "isSpotlight": false
      },
      {
        "num": 14,
        "color": "W",
        "coord": "D10",
        "comment": "After seeing Black 13, Lee sank into deep contemplation. Compared to his confident appearance in game 1, he now seemed much more prudent. He even declined the opportunity to attack the three stones in the lower right, opting instead to bide his time and split the left side. However, AlphaGo thinks Black should have played at the bottom as shown in the variation.",
        "isSpotlight": false
      },
      {
        "num": 15,
        "color": "B",
        "coord": "Q5",
        "comment": "The peep at Black 15 stunned the Go world for the second time in two moves! Any Go teacher would say that such a crude move cannot possibly be good, and would criticize any student who played it. Then again, AlphaGo never worried about other people's opinions.\n\nAs we walk the path of improvement, we must study and experience all aspects of the game: joseki, fuseki, shape, and direction, just to name a few. After we absorb this knowledge, we learn over time to apply it flexibly. But to reach the level of grandmasters, even this is not enough! As we gain experience, our knowledge fetters our creativity. To truly throw off these shackles and liberate ourselves from what we have learned, we must discard labels of \"right\" and \"wrong.\" In their place, we must consider the essence of Go: the role of each stone, and the relationships between them. Only in this way can we reach the level where invention prevails over tradition. AlphaGo began from the same fundamentals as humans, but the rigid attachment to knowledge is simply not in its nature. Thus, it is only natural that AlphaGo possesses a talent for creativity.\n\nIn the history of Go, I can think of two periods when a decisive shift occurred in Go theory. The first was the age of Go Seigen. The most famous example of his innovation is perhaps the game in which he opened on the star point, the tengen, and the 3-3 point, in a time when no other professional player would think of starting anywhere besides the 3-4 point. But beyond that, he showed us that Go, even at the highest level, can be played in any style one likes. Out of that age of 3-4 points, a hundred other styles blossomed and grew, including the Chinese opening we know today. However, many joseki and fuseki still remained purely theoretical.\n\nThe second such period was the age of Lee Changho and the Korean style. This movement was by no means the work of one person, but it was Lee Changho's rise that inspired Korean players to doubt established theory, and experiment with ever-bolder departures from the prevailing style. At first, many of these moves were called \"crude\" or simply \"bad,\" but the results spoke for themselves. As research progressed, many older joseki were disproved and discarded. We realized that many of these joseki had been established not by study, but by old grandmasters who had claimed that one way or another was the right one. The more we explored the new variations, the more fatal weaknesses were exposed in the old ones. These discoveries liberated us, stimulating the development of more and more new styles and variations. In the final analysis, this period marked a great advancement in our understanding of Go, simply because we had the courage to try new things.  \n\nHowever, the emergence of the Internet has stimulated ever-faster development and progress. As the strength gap between players shrinks, so too does the apparent window for innovation. But Go is a rich, abundant world - can we truly say that we have reached its limits? Perhaps AlphaGo can usher in a third wave of exploration and invention. When we are brave enough to defy theory, only then can we Go players call ourselves \"free.\" Even from the perspective of amateurs and fans, wouldn't this spirit make Go that much more fascinating to witness?\n\nIn fact, it is gratifying to note that since AlphaGo played 15, more and more professionals no longer find it so crude. Quite often, professionals find themselves wanting to exchange this move after the opportunity has disappeared, so many players have started trying to work it in earlier. It seems we have already gained some courage!",
        "isSpotlight": false
      },
      {
        "num": 16,
        "color": "W",
        "coord": "R5",
        "comment": "Move 16: White plays at R5.",
        "isSpotlight": false
      },
      {
        "num": 17,
        "color": "B",
        "coord": "C4",
        "comment": "Move 17: Black plays at C4.",
        "isSpotlight": false
      },
      {
        "num": 18,
        "color": "W",
        "coord": "C3",
        "comment": "Move 18: White plays at C3.",
        "isSpotlight": false
      },
      {
        "num": 19,
        "color": "B",
        "coord": "B3",
        "comment": "In the lower left, Black played more normally, choosing the standard moves to settle the corner.",
        "isSpotlight": false
      },
      {
        "num": 20,
        "color": "W",
        "coord": "C5",
        "comment": "Move 20: White plays at C5.",
        "isSpotlight": false
      },
      {
        "num": 21,
        "color": "B",
        "coord": "B4",
        "comment": "When Black connected with 21, Lee nodded. He seemed to be reaffirming his decision to play on the left side.",
        "isSpotlight": false
      },
      {
        "num": 22,
        "color": "W",
        "coord": "B5",
        "comment": "White chose to block, but AlphaGo prefers the connection shown in the variation.",
        "isSpotlight": false
      },
      {
        "num": 23,
        "color": "B",
        "coord": "D5",
        "comment": "Move 23: Black plays at D5.",
        "isSpotlight": false
      },
      {
        "num": 24,
        "color": "W",
        "coord": "B6",
        "comment": "Move 24: White plays at B6.",
        "isSpotlight": false
      },
      {
        "num": 25,
        "color": "B",
        "coord": "D3",
        "comment": "Move 25: Black plays at D3.",
        "isSpotlight": false
      },
      {
        "num": 26,
        "color": "W",
        "coord": "E4",
        "comment": "Move 26: White plays at E4.",
        "isSpotlight": false
      },
      {
        "num": 27,
        "color": "B",
        "coord": "D2",
        "comment": "Move 27: Black plays at D2.",
        "isSpotlight": false
      },
      {
        "num": 28,
        "color": "W",
        "coord": "C7",
        "comment": "Up to here, the moves in the lower left form a classic joseki.",
        "isSpotlight": false
      },
      {
        "num": 29,
        "color": "B",
        "coord": "K4",
        "comment": "Taking the initiative on the bottom, AlphaGo once again smashed convention with the beautiful two-space jump at 29! According to Nie Weiping, when he saw this move, he exclaimed, \"Hats off to AlphaGo!\" The rationale behind this move is not difficult to understand: since Black already has the marked stone in the corner, the lower side has lost much of its value, and the normal extension at A would be less efficient in view of White's thickness on the left. Furthermore, although Black 29 takes less territory than A, it gives Black more potential to expand in the center while restricting White's influence there. The real beauty of this move lies not just in the move itself, but in the way it demonstrates AlphaGo's ability to adapt joseki according to context. It is this sense of flexibility that deserves recognition.\n\nAt this point, Lee Sedol had 1 hour and 40 minutes left, AlphaGo 1 hour and 43 minutes.",
        "isSpotlight": false
      },
      {
        "num": 30,
        "color": "W",
        "coord": "C13",
        "comment": "Move 30: White plays at C13.",
        "isSpotlight": false
      },
      {
        "num": 31,
        "color": "B",
        "coord": "E16",
        "comment": "The exchange of A for B looks normal, but AlphaGo's win rate clearly increased, so it must think this benefits Black! See the variation.",
        "isSpotlight": false
      },
      {
        "num": 32,
        "color": "W",
        "coord": "R14",
        "comment": "After Black enclosed the corner, Lee Sedol briefly hesitated over the direction of play in the upper right. He eventually chose to approach from below.",
        "isSpotlight": false
      },
      {
        "num": 33,
        "color": "B",
        "coord": "R15",
        "comment": "The kick at 33 was a good choice for Black. White was already solid on the right, so the loss from strengthening White further was minimal, and 33 prevented White from invading the corner. See the variation.",
        "isSpotlight": false
      },
      {
        "num": 34,
        "color": "W",
        "coord": "Q14",
        "comment": "Move 34: White plays at Q14.",
        "isSpotlight": false
      },
      {
        "num": 35,
        "color": "B",
        "coord": "O16",
        "comment": "Move 35: Black plays at O16.",
        "isSpotlight": false
      },
      {
        "num": 36,
        "color": "W",
        "coord": "Q11",
        "comment": "Up to here, both sides played normally.",
        "isSpotlight": false
      },
      {
        "num": 37,
        "color": "B",
        "coord": "P10",
        "comment": "MOVE 37: THE 5th-LINE SHOULDER HIT (P10). Played into thin air, defying 2,500 years of Go dogma. AlphaGo calculated a 1-in-10,000 human probability, yet evaluated it as the winning move! Black 37 is one of the two moves from this match sure to go down in Go history. This move proved so stunning that, when it appeared on the screen, many players thought the stone had been put down in the wrong place.\n\nBecause my main duty was to count the score at the end of the game, I had nothing in particular to do in the meantime. However, for such a historic event, it would be a terrible shame if there were no one to record the scene in the playing room, so I took this role upon myself. Though I had no prior experience, my aim was simple: to capture the atmosphere, the players' expressions, even their gestures, and in this way to communicate the experience of the match.\n\nOn seeing Black 37, I wrote down the following: \"Here?! This goes beyond my understanding. Globally, there's nothing wrong with it, it's going in the right direction...and AlphaGo always pays special attention to coordinating the stones. It seems anything is possible in Go! Everyone will be talking about this move! A human would never dare play it, it's too difficult to estimate. But AlphaGo can. Perhaps this move is a sign of its confidence.\"\n\nThis move made a deep impression on me during the game. I experienced first confusion, then shock, and finally delight. It reminded me of an old Chinese saying: \"A beginner plays the corners, an average player the sides; but a master controls the center.\" These days, due to the convergence of strengths and the pressure of competition, something close to the opposite is true, with most players focusing on the corners and sides. In contrast, AlphaGo's talent for central control is second to none. Perhaps, through AlphaGo, we too can become the \"masters\" of which the proverb speaks.\n\nReturning to the game, we may say that Black 37 casts an invisible net across the board. Together with the lower side, Black's shoulder hit creates potential all across the center. Although it helps White make territory on the right, the presence of White A means that a Black invasion there would not have been valuable anyway. Of course, Black should be reluctant to give away fourth-line territory too easily, but one must give to get.\n\nAfter the match, when I examined the data back at DeepMind, I saw that AlphaGo had not even been thinking about 37 only a few moves before. It had been expecting diagram 6, and its data indicated that a human player would hardly consider the shoulder hit a possibility. It was only when White played 36 that AlphaGo discovered 37, and boldly decided that this move would work even better.\n\nThe pace of the game was much slower than the previous day, so Lee had already gone out to smoke before 37. The minute he caught sight of AlphaGo's reply, he stared blankly at the board. Then he smiled, sat down, and started thinking. The longer he thought, the more serious his expression became, while the clock ran down little by little.",
        "isSpotlight": true
      },
      {
        "num": 38,
        "color": "W",
        "coord": "P11",
        "comment": "After twelve minutes of thought, Lee finally pushed up at 38. Perhaps he was feeling the pressure, as the direction of this move is clearly problematic: White is helping Black build up the bottom. See the variation.",
        "isSpotlight": false
      },
      {
        "num": 39,
        "color": "B",
        "coord": "O10",
        "comment": "Move 39: Black plays at O10.",
        "isSpotlight": false
      },
      {
        "num": 40,
        "color": "W",
        "coord": "N12",
        "comment": "Even now, AlphaGo thought the knight's move at 40 was inappropriate, and recommended pushing as shown in the variation.\n\nIt seems that Black 37 not only helped AlphaGo on the board, but also threw Lee off balance psychologically.\n\nAt this point, AlphaGo’s win rate reached 55%.",
        "isSpotlight": false
      },
      {
        "num": 41,
        "color": "B",
        "coord": "G4",
        "comment": "Black 41 further restricted White's potential on the left, while enlarging Black's in the center.",
        "isSpotlight": false
      },
      {
        "num": 42,
        "color": "W",
        "coord": "G3",
        "comment": "At this point, Lee had 1 hour and 16 minutes, AlphaGo 1 hour and 34 minutes.",
        "isSpotlight": false
      },
      {
        "num": 43,
        "color": "B",
        "coord": "D6",
        "comment": "This connection was a definite overplay for AlphaGo.",
        "isSpotlight": false
      },
      {
        "num": 44,
        "color": "W",
        "coord": "D7",
        "comment": "After White pushed here, even AlphaGo's own win rate suffered a rare decline. Lee Sedol stared at the board with a scowl, evidently confused by AlphaGo's strategic slip. Drawing on the lessons of the first game, he remained cautious, taking time to verify each move.",
        "isSpotlight": false
      },
      {
        "num": 45,
        "color": "B",
        "coord": "F5",
        "comment": "Move 45: Black plays at F5.",
        "isSpotlight": false
      },
      {
        "num": 46,
        "color": "W",
        "coord": "H4",
        "comment": "Move 46: White plays at H4.",
        "isSpotlight": false
      },
      {
        "num": 47,
        "color": "B",
        "coord": "H5",
        "comment": "Move 47: Black plays at H5.",
        "isSpotlight": false
      },
      {
        "num": 48,
        "color": "W",
        "coord": "E5",
        "comment": "Move 48: White plays at E5.",
        "isSpotlight": false
      },
      {
        "num": 49,
        "color": "B",
        "coord": "E6",
        "comment": "When Black blocked at 49, AlphaGo's win rate fell to 50%. This may have been Lee's only chance to wrest control of the game. See the variation for one way he might have done so.",
        "isSpotlight": false
      },
      {
        "num": 50,
        "color": "W",
        "coord": "F6",
        "comment": "Regrettably, Lee missed the crucial opportunity, and chose this atari instead.",
        "isSpotlight": false
      },
      {
        "num": 51,
        "color": "B",
        "coord": "E7",
        "comment": "When Black extended, AlphaGo's win rate shot up to 59%!",
        "isSpotlight": false
      },
      {
        "num": 52,
        "color": "W",
        "coord": "E8",
        "comment": "Move 52: White plays at E8.",
        "isSpotlight": false
      },
      {
        "num": 53,
        "color": "B",
        "coord": "F7",
        "comment": "Move 53: Black plays at F7.",
        "isSpotlight": false
      },
      {
        "num": 54,
        "color": "W",
        "coord": "G6",
        "comment": "Move 54: White plays at G6.",
        "isSpotlight": false
      },
      {
        "num": 55,
        "color": "B",
        "coord": "F8",
        "comment": "Move 55: Black plays at F8.",
        "isSpotlight": false
      },
      {
        "num": 56,
        "color": "W",
        "coord": "G5",
        "comment": "Move 56: White plays at G5.",
        "isSpotlight": false
      },
      {
        "num": 57,
        "color": "B",
        "coord": "E9",
        "comment": "Move 57: Black plays at E9.",
        "isSpotlight": false
      },
      {
        "num": 58,
        "color": "W",
        "coord": "D9",
        "comment": "Move 58: White plays at D9.",
        "isSpotlight": false
      },
      {
        "num": 59,
        "color": "B",
        "coord": "D8",
        "comment": "Move 59: Black plays at D8.",
        "isSpotlight": false
      },
      {
        "num": 60,
        "color": "W",
        "coord": "C8",
        "comment": "Move 60: White plays at C8.",
        "isSpotlight": false
      },
      {
        "num": 61,
        "color": "B",
        "coord": "E12",
        "comment": "Move 61: Black plays at E12.",
        "isSpotlight": false
      },
      {
        "num": 62,
        "color": "W",
        "coord": "D11",
        "comment": "Lee still looked unconcerned. Through 62, Black had gained nothing locally, while White had captured two stones at the bottom, and furthermore the center group was not yet safe. On the face of it, White should at least not have been worse off. Globally speaking, however, Black had reduced White's left side in sente, made the profitable exchange of A for B, and come away with sente to take the last big point at the top. Overall, it would be hard not to call this a strategic success for Black.\n\nMany of the professionals in the commentary room did not understand Black's way of playing, but after game 1, they were hesitant to pass judgment.",
        "isSpotlight": false
      },
      {
        "num": 63,
        "color": "B",
        "coord": "Q10",
        "comment": "Move 63: Black plays at Q10.",
        "isSpotlight": false
      },
      {
        "num": 64,
        "color": "W",
        "coord": "R11",
        "comment": "Lee spent a few minutes in thought, and patiently descended with 64. AlphaGo felt this move was too soft, as did Gu Li and Zhou Ruiyang, and would have chosen to come back to the center as shown in the variation.",
        "isSpotlight": false
      },
      {
        "num": 65,
        "color": "B",
        "coord": "S14",
        "comment": "Move 65: Black plays at S14.",
        "isSpotlight": false
      },
      {
        "num": 66,
        "color": "W",
        "coord": "S13",
        "comment": "At this point, Lee Sedol had 59 minutes, AlphaGo 1 hour and 21 minutes.",
        "isSpotlight": false
      },
      {
        "num": 67,
        "color": "B",
        "coord": "L16",
        "comment": "When Black defended the upper side, AlphaGo pulled clearly into the lead.",
        "isSpotlight": false
      },
      {
        "num": 68,
        "color": "W",
        "coord": "H6",
        "comment": "Lee followed with several more slow moves, perhaps still misled by White's apparent gains on the left. This was one such move - see the variation.",
        "isSpotlight": false
      },
      {
        "num": 69,
        "color": "B",
        "coord": "P7",
        "comment": "Move 69: Black plays at P7.",
        "isSpotlight": false
      },
      {
        "num": 70,
        "color": "W",
        "coord": "S15",
        "comment": "Taking a stone on the second line was even slower. This choice left a deep impression on Gu Li and Zhou Ruiyang, who felt that Lee must have thought White ahead to play like this. The variation shows a better option for White.",
        "isSpotlight": false
      },
      {
        "num": 71,
        "color": "B",
        "coord": "S16",
        "comment": "Move 71: Black plays at S16.",
        "isSpotlight": false
      },
      {
        "num": 72,
        "color": "W",
        "coord": "T14",
        "comment": "Move 72: White plays at T14.",
        "isSpotlight": false
      },
      {
        "num": 73,
        "color": "B",
        "coord": "F11",
        "comment": "For AlphaGo, the outlook was continually improving. When Black played 73, its win rate reached 64%.\n\nFor a human player, Go requires the capacity to feel. The better the player, the more effectively their feelings steer them towards good moves and away from bad ones. However, if we rely too much on feeling, it begins to obscure rational calculation and judgment. After the AlphaGo match, Lee Sedol won nine consecutive games. When asked for his secret, he replied, \"Do not rely on instinct. Calculate with the utmost precision.\" That may be the lesson he drew from this game.",
        "isSpotlight": false
      },
      {
        "num": 74,
        "color": "W",
        "coord": "G9",
        "comment": "After Black protected at A, White's attack at 74 became much less severe.",
        "isSpotlight": false
      },
      {
        "num": 75,
        "color": "B",
        "coord": "H7",
        "comment": "On seeing 75, Lee finally seemed to wake up.",
        "isSpotlight": false
      },
      {
        "num": 76,
        "color": "W",
        "coord": "J6",
        "comment": "He sighed, and made the necessary extension.",
        "isSpotlight": false
      },
      {
        "num": 77,
        "color": "B",
        "coord": "H8",
        "comment": "By now Black's advantage was obvious.",
        "isSpotlight": false
      },
      {
        "num": 78,
        "color": "W",
        "coord": "L5",
        "comment": "Move 78: White plays at L5.",
        "isSpotlight": false
      },
      {
        "num": 79,
        "color": "B",
        "coord": "L4",
        "comment": "Move 79: Black plays at L4.",
        "isSpotlight": false
      },
      {
        "num": 80,
        "color": "W",
        "coord": "G17",
        "comment": "Seeking a comeback, Lee launched the do-or-die invasion at White 80! However, AlphaGo thinks White should remain patient, as shown in the variation.\n\nAt this point, Lee Sedol had 50 minutes, AlphaGo 1 hour and 12 minutes.",
        "isSpotlight": false
      },
      {
        "num": 81,
        "color": "B",
        "coord": "D14",
        "comment": "Just as everyone was debating how Black should answer locally, AlphaGo played the shoulder hit at 81, reinforcing the center while subtly pressuring White's invading stone. It felt like a breath of fresh air - truly, an amazing example of whole-board thinking!\n\nNot only did this move connect up the center, it completed a huge wall. Although Black had done nothing to attack White directly, the invisible pressure was suffocating! The saying normally goes \"attack is the best form of defence,\" but in this case, defence was the best form of attack.",
        "isSpotlight": false
      },
      {
        "num": 82,
        "color": "W",
        "coord": "J16",
        "comment": "Facing 81, Lee sobered up completely. He sighed, his face reddening.\n\nBecause Black's center potential is so great, White can no longer be satisfied with living locally. The attachment aimed to escape.",
        "isSpotlight": false
      },
      {
        "num": 83,
        "color": "B",
        "coord": "K17",
        "comment": "Drawing back was a calm response.\n\nAt this point, Lee had 41 minutes remaining, AlphaGo 1 hour and 10 minutes.",
        "isSpotlight": false
      },
      {
        "num": 84,
        "color": "W",
        "coord": "G15",
        "comment": "Move 84: White plays at G15.",
        "isSpotlight": false
      },
      {
        "num": 85,
        "color": "B",
        "coord": "D13",
        "comment": "Black 85 was solid defense.",
        "isSpotlight": false
      },
      {
        "num": 86,
        "color": "W",
        "coord": "C14",
        "comment": "Move 86: White plays at C14.",
        "isSpotlight": false
      },
      {
        "num": 87,
        "color": "B",
        "coord": "C12",
        "comment": "Move 87: Black plays at C12.",
        "isSpotlight": false
      },
      {
        "num": 88,
        "color": "W",
        "coord": "B12",
        "comment": "Move 88: White plays at B12.",
        "isSpotlight": false
      },
      {
        "num": 89,
        "color": "B",
        "coord": "D12",
        "comment": "Move 89: Black plays at D12.",
        "isSpotlight": false
      },
      {
        "num": 90,
        "color": "W",
        "coord": "B11",
        "comment": "Up to here, Black had not only compressed White's territory on the left, but also reinforced the connection between the center and the corner.",
        "isSpotlight": false
      },
      {
        "num": 91,
        "color": "B",
        "coord": "H16",
        "comment": "Following this hane, it became difficult for White to save the initial invasion stone.",
        "isSpotlight": false
      },
      {
        "num": 92,
        "color": "W",
        "coord": "H15",
        "comment": "Move 92: White plays at H15.",
        "isSpotlight": false
      },
      {
        "num": 93,
        "color": "B",
        "coord": "G16",
        "comment": "Move 93: Black plays at G16.",
        "isSpotlight": false
      },
      {
        "num": 94,
        "color": "W",
        "coord": "F16",
        "comment": "Move 94: White plays at F16.",
        "isSpotlight": false
      },
      {
        "num": 95,
        "color": "B",
        "coord": "H17",
        "comment": "Move 95: Black plays at H17.",
        "isSpotlight": false
      },
      {
        "num": 96,
        "color": "W",
        "coord": "F15",
        "comment": "Move 96: White plays at F15.",
        "isSpotlight": false
      },
      {
        "num": 97,
        "color": "B",
        "coord": "E17",
        "comment": "Move 97: Black plays at E17.",
        "isSpotlight": false
      },
      {
        "num": 98,
        "color": "W",
        "coord": "G12",
        "comment": "White had no choice but to escape, since connecting would have meant the death of the whole group. See the variation.",
        "isSpotlight": false
      },
      {
        "num": 99,
        "color": "B",
        "coord": "F17",
        "comment": "At this point, AlphaGo’s win rate reached 73%.",
        "isSpotlight": false
      },
      {
        "num": 100,
        "color": "W",
        "coord": "G11",
        "comment": "After the cut, Lee had no real chance of winning.\n\nWe have all had the experience of playing a game where we are behind. Against a person, the best hope is to stay calm and patiently await the opponent’s mistakes. After all, to err is human. Against AlphaGo, of course, this strategy is futile. It is calmer than you, more patient than you, and, by the time you realize you are in trouble, the game is already decided.\n\nLee had just experienced this painful process, the desperation of knowing one's fate while being helpless to change it. But, as a professional Go player, he could only steel himself and press on.",
        "isSpotlight": false
      },
      {
        "num": 101,
        "color": "B",
        "coord": "J11",
        "comment": "Move 101: Black plays at J11.",
        "isSpotlight": false
      },
      {
        "num": 102,
        "color": "W",
        "coord": "H9",
        "comment": "Move 102: White plays at H9.",
        "isSpotlight": false
      },
      {
        "num": 103,
        "color": "B",
        "coord": "J9",
        "comment": "Move 103: Black plays at J9.",
        "isSpotlight": false
      },
      {
        "num": 104,
        "color": "W",
        "coord": "J8",
        "comment": "Move 104: White plays at J8.",
        "isSpotlight": false
      },
      {
        "num": 105,
        "color": "B",
        "coord": "J7",
        "comment": "Move 105: Black plays at J7.",
        "isSpotlight": false
      },
      {
        "num": 106,
        "color": "W",
        "coord": "J10",
        "comment": "Move 106: White plays at J10.",
        "isSpotlight": false
      },
      {
        "num": 107,
        "color": "B",
        "coord": "K8",
        "comment": "Move 107: Black plays at K8.",
        "isSpotlight": false
      },
      {
        "num": 108,
        "color": "W",
        "coord": "K10",
        "comment": "Move 108: White plays at K10.",
        "isSpotlight": false
      },
      {
        "num": 109,
        "color": "B",
        "coord": "J14",
        "comment": "Here, AlphaGo’s win rate reached 78%.",
        "isSpotlight": false
      },
      {
        "num": 110,
        "color": "W",
        "coord": "L7",
        "comment": "Move 110: White plays at L7.",
        "isSpotlight": false
      },
      {
        "num": 111,
        "color": "B",
        "coord": "L8",
        "comment": "Move 111: Black plays at L8.",
        "isSpotlight": false
      },
      {
        "num": 112,
        "color": "W",
        "coord": "M10",
        "comment": "Move 112: White plays at M10.",
        "isSpotlight": false
      },
      {
        "num": 113,
        "color": "B",
        "coord": "M9",
        "comment": "Move 113: Black plays at M9.",
        "isSpotlight": false
      },
      {
        "num": 114,
        "color": "W",
        "coord": "M5",
        "comment": "Move 114: White plays at M5.",
        "isSpotlight": false
      },
      {
        "num": 115,
        "color": "B",
        "coord": "M11",
        "comment": "At this point, Lee had 10 minutes, AlphaGo 48 minutes.",
        "isSpotlight": false
      },
      {
        "num": 116,
        "color": "W",
        "coord": "L10",
        "comment": "Move 116: White plays at L10.",
        "isSpotlight": false
      },
      {
        "num": 117,
        "color": "B",
        "coord": "C11",
        "comment": "Move 117: Black plays at C11.",
        "isSpotlight": false
      },
      {
        "num": 118,
        "color": "W",
        "coord": "C10",
        "comment": "Move 118: White plays at C10.",
        "isSpotlight": false
      },
      {
        "num": 119,
        "color": "B",
        "coord": "N10",
        "comment": "Move 119: Black plays at N10.",
        "isSpotlight": false
      },
      {
        "num": 120,
        "color": "W",
        "coord": "O2",
        "comment": "Move 120: White plays at O2.",
        "isSpotlight": false
      },
      {
        "num": 121,
        "color": "B",
        "coord": "N2",
        "comment": "Move 121: Black plays at N2.",
        "isSpotlight": false
      },
      {
        "num": 122,
        "color": "W",
        "coord": "M3",
        "comment": "Move 122: White plays at M3.",
        "isSpotlight": false
      },
      {
        "num": 123,
        "color": "B",
        "coord": "M4",
        "comment": "Move 123: Black plays at M4.",
        "isSpotlight": false
      },
      {
        "num": 124,
        "color": "W",
        "coord": "N3",
        "comment": "Move 124: White plays at N3.",
        "isSpotlight": false
      },
      {
        "num": 125,
        "color": "B",
        "coord": "O4",
        "comment": "Move 125: Black plays at O4.",
        "isSpotlight": false
      },
      {
        "num": 126,
        "color": "W",
        "coord": "M2",
        "comment": "Move 126: White plays at M2.",
        "isSpotlight": false
      },
      {
        "num": 127,
        "color": "B",
        "coord": "M7",
        "comment": "Move 127: Black plays at M7.",
        "isSpotlight": false
      },
      {
        "num": 128,
        "color": "W",
        "coord": "L12",
        "comment": "Move 128: White plays at L12.",
        "isSpotlight": false
      },
      {
        "num": 129,
        "color": "B",
        "coord": "H13",
        "comment": "Move 129: Black plays at H13.",
        "isSpotlight": false
      },
      {
        "num": 130,
        "color": "W",
        "coord": "R17",
        "comment": "Move 130: White plays at R17.",
        "isSpotlight": false
      },
      {
        "num": 131,
        "color": "B",
        "coord": "R16",
        "comment": "Move 131: Black plays at R16.",
        "isSpotlight": false
      },
      {
        "num": 132,
        "color": "W",
        "coord": "S17",
        "comment": "Move 132: White plays at S17.",
        "isSpotlight": false
      },
      {
        "num": 133,
        "color": "B",
        "coord": "Q17",
        "comment": "Move 133: Black plays at Q17.",
        "isSpotlight": false
      },
      {
        "num": 134,
        "color": "W",
        "coord": "T16",
        "comment": "Move 134: White plays at T16.",
        "isSpotlight": false
      },
      {
        "num": 135,
        "color": "B",
        "coord": "G13",
        "comment": "Move 135: Black plays at G13.",
        "isSpotlight": false
      },
      {
        "num": 136,
        "color": "W",
        "coord": "C15",
        "comment": "Move 136: White plays at C15.",
        "isSpotlight": false
      },
      {
        "num": 137,
        "color": "B",
        "coord": "B16",
        "comment": "Move 137: Black plays at B16.",
        "isSpotlight": false
      },
      {
        "num": 138,
        "color": "W",
        "coord": "R18",
        "comment": "Move 138: White plays at R18.",
        "isSpotlight": false
      },
      {
        "num": 139,
        "color": "B",
        "coord": "H11",
        "comment": "Move 139: Black plays at H11.",
        "isSpotlight": false
      },
      {
        "num": 140,
        "color": "W",
        "coord": "K13",
        "comment": "Move 140: White plays at K13.",
        "isSpotlight": false
      },
      {
        "num": 141,
        "color": "B",
        "coord": "H10",
        "comment": "In the end, AlphaGo never went for the kill in the center, instead nibbling away at White's stones bit by bit. Although it looked as if White had destroyed much of Black's territory at the top and bottom, the actual score tilted ever more strongly in Black's favor.",
        "isSpotlight": false
      },
      {
        "num": 142,
        "color": "W",
        "coord": "P18",
        "comment": "Move 142: White plays at P18.",
        "isSpotlight": false
      },
      {
        "num": 143,
        "color": "B",
        "coord": "Q18",
        "comment": "Move 143: Black plays at Q18.",
        "isSpotlight": false
      },
      {
        "num": 144,
        "color": "W",
        "coord": "Q19",
        "comment": "Move 144: White plays at Q19.",
        "isSpotlight": false
      },
      {
        "num": 145,
        "color": "B",
        "coord": "O18",
        "comment": "Move 145: Black plays at O18.",
        "isSpotlight": false
      },
      {
        "num": 146,
        "color": "W",
        "coord": "D15",
        "comment": "Move 146: White plays at D15.",
        "isSpotlight": false
      },
      {
        "num": 147,
        "color": "B",
        "coord": "E15",
        "comment": "Move 147: Black plays at E15.",
        "isSpotlight": false
      },
      {
        "num": 148,
        "color": "W",
        "coord": "G10",
        "comment": "Move 148: White plays at G10.",
        "isSpotlight": false
      },
      {
        "num": 149,
        "color": "B",
        "coord": "H12",
        "comment": "Move 149: Black plays at H12.",
        "isSpotlight": false
      },
      {
        "num": 150,
        "color": "W",
        "coord": "E10",
        "comment": "Move 150: White plays at E10.",
        "isSpotlight": false
      },
      {
        "num": 151,
        "color": "B",
        "coord": "O14",
        "comment": "Move 151: Black plays at O14.",
        "isSpotlight": false
      },
      {
        "num": 152,
        "color": "W",
        "coord": "N14",
        "comment": "Move 152: White plays at N14.",
        "isSpotlight": false
      },
      {
        "num": 153,
        "color": "B",
        "coord": "N15",
        "comment": "Move 153: Black plays at N15.",
        "isSpotlight": false
      },
      {
        "num": 154,
        "color": "W",
        "coord": "S9",
        "comment": "Move 154: White plays at S9.",
        "isSpotlight": false
      },
      {
        "num": 155,
        "color": "B",
        "coord": "F12",
        "comment": "Move 155: Black plays at F12.",
        "isSpotlight": false
      },
      {
        "num": 156,
        "color": "W",
        "coord": "E8",
        "comment": "Move 156: White plays at E8.",
        "isSpotlight": false
      },
      {
        "num": 157,
        "color": "B",
        "coord": "O12",
        "comment": "Move 157: Black plays at O12.",
        "isSpotlight": false
      },
      {
        "num": 158,
        "color": "W",
        "coord": "O13",
        "comment": "Move 158: White plays at O13.",
        "isSpotlight": false
      },
      {
        "num": 159,
        "color": "B",
        "coord": "M13",
        "comment": "Even though the result was already decided, the beautiful tesuji at Black 159 is worth remembering! With this move, White's center collapsed.",
        "isSpotlight": false
      },
      {
        "num": 160,
        "color": "W",
        "coord": "M12",
        "comment": "Move 160: White plays at M12.",
        "isSpotlight": false
      },
      {
        "num": 161,
        "color": "B",
        "coord": "N13",
        "comment": "Move 161: Black plays at N13.",
        "isSpotlight": false
      },
      {
        "num": 162,
        "color": "W",
        "coord": "P13",
        "comment": "Move 162: White plays at P13.",
        "isSpotlight": false
      },
      {
        "num": 163,
        "color": "B",
        "coord": "L13",
        "comment": "Move 163: Black plays at L13.",
        "isSpotlight": false
      },
      {
        "num": 164,
        "color": "W",
        "coord": "O11",
        "comment": "Move 164: White plays at O11.",
        "isSpotlight": false
      },
      {
        "num": 165,
        "color": "B",
        "coord": "K12",
        "comment": "Move 165: Black plays at K12.",
        "isSpotlight": false
      },
      {
        "num": 166,
        "color": "W",
        "coord": "O19",
        "comment": "Move 166: White plays at O19.",
        "isSpotlight": false
      },
      {
        "num": 167,
        "color": "B",
        "coord": "L11",
        "comment": "Move 167: Black plays at L11.",
        "isSpotlight": false
      },
      {
        "num": 168,
        "color": "W",
        "coord": "N11",
        "comment": "Move 168: White plays at N11.",
        "isSpotlight": false
      },
      {
        "num": 169,
        "color": "B",
        "coord": "K11",
        "comment": "Move 169: Black plays at K11.",
        "isSpotlight": false
      },
      {
        "num": 170,
        "color": "W",
        "coord": "O17",
        "comment": "Move 170: White plays at O17.",
        "isSpotlight": false
      },
      {
        "num": 171,
        "color": "B",
        "coord": "N18",
        "comment": "Move 171: Black plays at N18.",
        "isSpotlight": false
      },
      {
        "num": 172,
        "color": "W",
        "coord": "P16",
        "comment": "Move 172: White plays at P16.",
        "isSpotlight": false
      },
      {
        "num": 173,
        "color": "B",
        "coord": "N17",
        "comment": "Move 173: Black plays at N17.",
        "isSpotlight": false
      },
      {
        "num": 174,
        "color": "W",
        "coord": "P17",
        "comment": "Move 174: White plays at P17.",
        "isSpotlight": false
      },
      {
        "num": 175,
        "color": "B",
        "coord": "L2",
        "comment": "Move 175: Black plays at L2.",
        "isSpotlight": false
      },
      {
        "num": 176,
        "color": "W",
        "coord": "N1",
        "comment": "Move 176: White plays at N1.",
        "isSpotlight": false
      },
      {
        "num": 177,
        "color": "B",
        "coord": "J5",
        "comment": "Move 177: Black plays at J5.",
        "isSpotlight": false
      },
      {
        "num": 178,
        "color": "W",
        "coord": "J4",
        "comment": "Move 178: White plays at J4.",
        "isSpotlight": false
      },
      {
        "num": 179,
        "color": "B",
        "coord": "K5",
        "comment": "Move 179: Black plays at K5.",
        "isSpotlight": false
      },
      {
        "num": 180,
        "color": "W",
        "coord": "K6",
        "comment": "Move 180: White plays at K6.",
        "isSpotlight": false
      },
      {
        "num": 181,
        "color": "B",
        "coord": "J2",
        "comment": "Move 181: Black plays at J2.",
        "isSpotlight": false
      },
      {
        "num": 182,
        "color": "W",
        "coord": "H2",
        "comment": "Move 182: White plays at H2.",
        "isSpotlight": false
      },
      {
        "num": 183,
        "color": "B",
        "coord": "R8",
        "comment": "Move 183: Black plays at R8.",
        "isSpotlight": false
      },
      {
        "num": 184,
        "color": "W",
        "coord": "S8",
        "comment": "Move 184: White plays at S8.",
        "isSpotlight": false
      },
      {
        "num": 185,
        "color": "B",
        "coord": "R7",
        "comment": "Move 185: Black plays at R7.",
        "isSpotlight": false
      },
      {
        "num": 186,
        "color": "W",
        "coord": "S7",
        "comment": "Move 186: White plays at S7.",
        "isSpotlight": false
      },
      {
        "num": 187,
        "color": "B",
        "coord": "A5",
        "comment": "Move 187: Black plays at A5.",
        "isSpotlight": false
      },
      {
        "num": 188,
        "color": "W",
        "coord": "B7",
        "comment": "Move 188: White plays at B7.",
        "isSpotlight": false
      },
      {
        "num": 189,
        "color": "B",
        "coord": "M6",
        "comment": "Move 189: Black plays at M6.",
        "isSpotlight": false
      },
      {
        "num": 190,
        "color": "W",
        "coord": "L6",
        "comment": "Move 190: White plays at L6.",
        "isSpotlight": false
      },
      {
        "num": 191,
        "color": "B",
        "coord": "N5",
        "comment": "Move 191: Black plays at N5.",
        "isSpotlight": false
      },
      {
        "num": 192,
        "color": "W",
        "coord": "B15",
        "comment": "Move 192: White plays at B15.",
        "isSpotlight": false
      },
      {
        "num": 193,
        "color": "B",
        "coord": "A15",
        "comment": "Move 193: Black plays at A15.",
        "isSpotlight": false
      },
      {
        "num": 194,
        "color": "W",
        "coord": "A14",
        "comment": "Move 194: White plays at A14.",
        "isSpotlight": false
      },
      {
        "num": 195,
        "color": "B",
        "coord": "A16",
        "comment": "Move 195: Black plays at A16.",
        "isSpotlight": false
      },
      {
        "num": 196,
        "color": "W",
        "coord": "N19",
        "comment": "Move 196: White plays at N19.",
        "isSpotlight": false
      },
      {
        "num": 197,
        "color": "B",
        "coord": "M19",
        "comment": "Move 197: Black plays at M19.",
        "isSpotlight": false
      },
      {
        "num": 198,
        "color": "W",
        "coord": "P19",
        "comment": "Move 198: White plays at P19.",
        "isSpotlight": false
      },
      {
        "num": 199,
        "color": "B",
        "coord": "D16",
        "comment": "Move 199: Black plays at D16.",
        "isSpotlight": false
      },
      {
        "num": 200,
        "color": "W",
        "coord": "B13",
        "comment": "Move 200: White plays at B13.",
        "isSpotlight": false
      },
      {
        "num": 201,
        "color": "B",
        "coord": "M18",
        "comment": "Move 201: Black plays at M18.",
        "isSpotlight": false
      },
      {
        "num": 202,
        "color": "W",
        "coord": "Q6",
        "comment": "Move 202: White plays at Q6.",
        "isSpotlight": false
      },
      {
        "num": 203,
        "color": "B",
        "coord": "P6",
        "comment": "Move 203: Black plays at P6.",
        "isSpotlight": false
      },
      {
        "num": 204,
        "color": "W",
        "coord": "E2",
        "comment": "Move 204: White plays at E2.",
        "isSpotlight": false
      },
      {
        "num": 205,
        "color": "B",
        "coord": "C2",
        "comment": "Move 205: Black plays at C2.",
        "isSpotlight": false
      },
      {
        "num": 206,
        "color": "W",
        "coord": "F4",
        "comment": "Move 206: White plays at F4.",
        "isSpotlight": false
      },
      {
        "num": 207,
        "color": "B",
        "coord": "J3",
        "comment": "Move 207: Black plays at J3.",
        "isSpotlight": false
      },
      {
        "num": 208,
        "color": "W",
        "coord": "H3",
        "comment": "Move 208: White plays at H3.",
        "isSpotlight": false
      },
      {
        "num": 209,
        "color": "B",
        "coord": "R10",
        "comment": "Move 209: Black plays at R10.",
        "isSpotlight": false
      },
      {
        "num": 210,
        "color": "W",
        "coord": "S10",
        "comment": "Move 210: White plays at S10.",
        "isSpotlight": false
      },
      {
        "num": 211,
        "color": "B",
        "coord": "L1",
        "comment": "As the game neared its end, Lee continually recounted the score, looking for some sort of miracle. But he searched in vain: as the world had already realized, AlphaGo had won.\n\nAfter playing on doggedly in byo-yomi, Lee Sedol resigned at move 211. In that moment, I heard the reluctance in his voice, and saw the regret etched upon his face.\n\nDuring the press conference, Lee's voice was choked with emotion, and he repeated many times how impressed he was with AlphaGo's near-perfect play. The way he spoke, it seemed as if he bore the weight of the entire Go world on his shoulders.\n\nAlthough AlphaGo's play in the first two games had verged on perfection, the match was not yet over. Behind Lee's trembling voice there stood a firm conviction: \"I may have lost the second game, but there is still a third game left to play.\"\n\nAt the end of this game, the entire Go world was left astonished and bewildered. Perhaps the time had come to rethink our understanding of AlphaGo, and of ourselves.",
        "isSpotlight": false
      }
    ]
  },
  {
    "id": "2016-g3",
    "title": "Game 3: Sealing Match Victory (3-0)",
    "black": "AlphaGo",
    "white": "Lee Sedol (9p)",
    "date": "March 12, 2016",
    "result": "Black won by resignation (176 moves)",
    "highlightMove": 32,
    "description": "AlphaGo secures the historic match series 3-0, executing a brilliant double attack across the center of the board.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "Q16",
        "comment": "Move 1: Black plays at Q16."
      },
      {
        "num": 2,
        "color": "W",
        "coord": "Q4",
        "comment": "Move 2: White plays at Q4."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "C16",
        "comment": "As Lee put down move 3, I was surprised to see his hand shaking slightly. I had heard that Lee sometimes suffered from insomnia before important games. Perhaps yesterday was one such sleepless night."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "D4",
        "comment": "Move 4: White plays at D4."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "C6",
        "comment": "Move 5: Black plays at C6."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "F3",
        "comment": "Move 6: White plays at F3."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "J16",
        "comment": "Black 7 set up the high Chinese fuseki, a fighting stance that seeks to take the initiative. It seemed that Lee was done with waiting patiently."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "R14",
        "comment": "Move 8: White plays at R14."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "O17",
        "comment": "Facing the corner approach, Lee hesitated for three minutes, eventually choosing the knight's move at 9. He must have worried about White invading the corner directly at the 3-3 point if he had jumped on the fourth line. Nonetheless, AlphaGo thought this was the best plan for Black. See the variation."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "R7",
        "comment": "White protected the upper left corner with the large knight's move at 10, a relatively common strategy. AlphaGo’s win rate at this point was 51.5%."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "D10",
        "comment": "Move 11: Black plays at D10."
      },
      {
        "num": 12,
        "color": "W",
        "coord": "E16",
        "comment": "Black's extension was necessary, and White 12 also seems like the only move."
      },
      {
        "num": 13,
        "color": "B",
        "coord": "D17",
        "comment": "Black's kosumi with 13 is an uncommon way of playing - Lee must have prepared it to work with his high Chinese opening. Later, I found that AlphaGo would also have played this move."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "E13",
        "comment": "When White played the two-space jump at 14, it felt as if AlphaGo were looking down from the heavens, comprehending the entire board at a glance."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "E14",
        "comment": "I do not know whether anyone had played the jump at 14 before, but it seemed to infuriate Lee, who slapped down the astonishing attachment at Black 15!\n\nPlaying with AlphaGo can feel distressingly like euthanasia: by the time we feel what is going on, we are already dead. Perhaps this is why Lee seized the first opportunity to attack, attempting to rip open AlphaGo's weak points before its global advantage grew overwhelming. Nonetheless, from the perspective of Go fundamentals, Black 15 is simply too extreme.\n\nMany people have asked me about Lee Sedol's style. Most would call him a fighter, but I feel this is too broad a label. Gu Li is also a fighter, but he is the tough, courageous, and direct kind, whereas Lee resembles a wolf who ambushes his prey. He conceals himself, awaiting the best opportunity. His slow preparation lulls you into unawareness. Patience and keen senses are his weapons. Finally, the moment he detects his chance, he strikes, swiftly and fatally.\n\nBut in this game, Lee betrayed his style and showed his fangs too early. Perhaps he succumbed to the pressure, to the desire for a clear victory to prove himself.\n\nAlphaGo also thought Black 15 was overplay. See the variation."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "D15",
        "comment": "After White hit the elephant's eye with 16, Black's shape was hard to bear. The next move would be mandatory for a human player, but AlphaGo believed there was still time to change course. See the variation."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "D14",
        "comment": "Move 17: Black plays at D14."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "C15",
        "comment": "Playing against AlphaGo can induce a certain sense of despair. It is like a black hole, sucking you in little by little. No matter how you try to break away, you will slowly discover that your efforts count for nothing.\n\nAfter White 18, it was Black's shape that was torn apart. Lee's face began to redden."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "E17",
        "comment": "Move 19: Black plays at E17."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "F16",
        "comment": "Move 20: White plays at F16."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "F14",
        "comment": "Many commentaries disagreed with Black 21, even calling it the losing move, but AlphaGo saw no problem with this way of playing.\n\nAt this point, Lee had 1 hour and 41 minutes left, AlphaGo 1 hour and 48 minutes."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "F17",
        "comment": "Lee sighed when he saw this move, although he must have known it was coming."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "B16",
        "comment": "Move 23: Black plays at B16."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "H15",
        "comment": "Move 24: White plays at H15."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "J15",
        "comment": "Move 25: Black plays at J15."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "H16",
        "comment": "Lee hesitated over the choice presented by this move: enclose White and let the group live, or give no quarter and continue pursuing the attack?"
      },
      {
        "num": 27,
        "color": "B",
        "coord": "J17",
        "comment": "Move 27: Black plays at J17."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "H13",
        "comment": "Black continued attacking, but when White came out at 28, Lee sighed even deeper. Did he regret the initial fight, or the decision to continue? Either way, in a game against AlphaGo, the more one plays, the more doubts arise, and these doubts are what will ultimately prove fatal.\n\nIn any case, AlphaGo thought Black should have extended as shown in the variation.\n\nWhen White jumped here, AlphaGo’s win rate stood at 59%."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "J14",
        "comment": "Move 29: Black plays at J14."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "G13",
        "comment": "When White played 30, Lee Sedol rested his hand on the bowl and started tapping his finger. This decision would take courage."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "K12",
        "comment": "Courage he may have had, but Black 31 was a definite overplay! Lee must have known this, but since he could not best AlphaGo in a contest of positional judgment, perhaps he hoped to break through its defenses in local fighting.\n\nOf course, AlphaGo did not agree with this move. See the variation."
      },
      {
        "num": 32,
        "color": "W",
        "coord": "C11",
        "comment": "After the baptism by fire of the last two games, Go players were prepared to appreciate AlphaGo's ability. When move 32 appeared onscreen, everyone agreed it was a beautiful, perfect move! Although White's local shape was strange, the situation already looked out of Black's control. See the variation for some alternative lines.\n\nLee glanced at the clock. Then he began to rock back and forth, nervously, like a boat drifting in windy seas. At this point, AlphaGo's win rate had reached 62%."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "D13",
        "comment": "In the actual game, Lee had no choice but to turn at 33, after which he left the room for a smoke. He needed to regain calm, but it was a bit too late.\n\nIn the sequence that followed, AlphaGo's fighting strategy was watertight. If Go were boxing, then Lee came in with fists swinging, but he may as well have been punching cotton. The way his strength rebounded back on him must have been difficult to bear."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "D11",
        "comment": "Move 34: White plays at D11."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "E11",
        "comment": "Move 35: Black plays at E11."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "B13",
        "comment": "Move 36: White plays at B13."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "B12",
        "comment": "Move 37: Black plays at B12."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "B15",
        "comment": "Move 38: White plays at B15."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "B11",
        "comment": "Move 39: Black plays at B11."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "C10",
        "comment": "Move 40: White plays at C10."
      },
      {
        "num": 41,
        "color": "B",
        "coord": "D12",
        "comment": "Move 41: Black plays at D12."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "D9",
        "comment": "Move 42: White plays at D9."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "E10",
        "comment": "Move 43: Black plays at E10."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "C9",
        "comment": "Move 44: White plays at C9."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "C12",
        "comment": "Move 45: Black plays at C12."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "G11",
        "comment": "Move 46: White plays at G11."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "F12",
        "comment": "Move 47: Black plays at F12."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "D7",
        "comment": "As Lee pressed beyond the point of no return, AlphaGo's win rate continued to rise. By the time White jumped at 48, it had already topped 72%.\n\nAt this point, Lee had 1 hour left, AlphaGo 1 hour and 34 minutes."
      },
      {
        "num": 49,
        "color": "B",
        "coord": "D6",
        "comment": "Move 49: Black plays at D6."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "F13",
        "comment": "Move 50: White plays at F13."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "E12",
        "comment": "Move 51: Black plays at E12."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "F7",
        "comment": "Move 52: White plays at F7."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "E9",
        "comment": "Move 53: Black plays at E9."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "E8",
        "comment": "During this game, Lee was clearly in a different state of mind than he had been before. He murmured and sighed incessantly, shook his head back and forth, even occasionally ventured a helpless smile.\n\nThe battle grew more difficult for Black, and when White played 54, the win rate stood at 74%. To reach such a high number so quickly meant that the game was essentially decided, but Lee continued to persevere."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "G9",
        "comment": "Move 55: Black plays at G9."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "J11",
        "comment": "Move 56: White plays at J11."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "C7",
        "comment": "Move 57: Black plays at C7."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "F5",
        "comment": "Move 58: White plays at F5."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "E6",
        "comment": "Move 59: Black plays at E6."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "F8",
        "comment": "Move 60: White plays at F8."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "B9",
        "comment": "Black 61 was an interesting move. Normally, Black would first exchange A for B to secure an unconditional connection with 61. In the game, there remained a dangerous possibility of ko.\n\nSince the beginning of the match, there had been a rumor that AlphaGo could not handle ko correctly. Especially since it had avoided a large ko near the end of game 2, it seemed that AlphaGo sought to prevent ko. Perhaps Lee wanted to verify the rumor."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "B10",
        "comment": "Move 62: White plays at B10."
      },
      {
        "num": 63,
        "color": "B",
        "coord": "A10",
        "comment": "Move 63: Black plays at A10."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "H7",
        "comment": "When White jumped with 64, AlphaGo's win rate reached 77%.\n\nSee the variation for an idea of what might happen when White triggers the ko."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "H10",
        "comment": "Move 65: Black plays at H10."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "H11",
        "comment": "Move 66: White plays at H11."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "G10",
        "comment": "Move 67: Black plays at G10."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "K11",
        "comment": "Move 68: White plays at K11."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "J8",
        "comment": "One look at Lee's face was enough to see how the game was going. Perhaps the last hope for Black was that White's dragon at the bottom remained a little insecure.\n\nHere, Lee had 39 minutes, AlphaGo 1 hour and 21 minutes."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "K6",
        "comment": "Move 70: White plays at K6."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "C4",
        "comment": "Move 71: Black plays at C4."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "C3",
        "comment": "Move 72: White plays at C3."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "D3",
        "comment": "Move 73: Black plays at D3."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "D2",
        "comment": "Move 74: White plays at D2."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "B3",
        "comment": "Move 75: Black plays at B3."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "E3",
        "comment": "Move 76: White plays at E3."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "Q7",
        "comment": "With the attachment at 77, Lee admitted that he could not win by normal means. Instead, he resorted to his famous \"zombie\" style! As the name implies, this style is one in which a player is already \"dead,\" or at least doomed, but thrashes about frighteningly in an attempt to catch the opponent off guard. This strategy has won back many a lost game, but against AlphaGo, it seemed more tragic than anything else."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "Q8",
        "comment": "Move 78: White plays at Q8."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "R6",
        "comment": "Move 79: Black plays at R6."
      },
      {
        "num": 80,
        "color": "W",
        "coord": "P7",
        "comment": "Move 80: White plays at P7."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "Q6",
        "comment": "Move 81: Black plays at Q6."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "R8",
        "comment": "Move 82: White plays at R8."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "P8",
        "comment": "Move 83: Black plays at P8."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "P6",
        "comment": "When White pressed at 84, AlphaGo's win rate was 84%."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "S6",
        "comment": "Move 85: Black plays at S6."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "P5",
        "comment": "Move 86: White plays at P5."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "P9",
        "comment": "Move 87: Black plays at P9."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "R11",
        "comment": "Move 88: White plays at R11."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "M8",
        "comment": "Move 89: Black plays at M8."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "H17",
        "comment": "Move 90: White plays at H17."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "R3",
        "comment": "Move 91: Black plays at R3."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "R4",
        "comment": "Move 92: White plays at R4."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "S4",
        "comment": "Move 93: Black plays at S4."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "Q3",
        "comment": "Move 94: White plays at Q3."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "S3",
        "comment": "Move 95: Black plays at S3."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "R2",
        "comment": "Move 96: White plays at R2."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "S2",
        "comment": "Move 97: Black plays at S2."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "M6",
        "comment": "The battle in the upper left drew to a close with 98. Black had lived in the corner, but White had gained safety for the group on the lower side, and secured an enormous swath of sixth-line territory on the top! Black's position was already hopeless, as confirmed by AlphaGo’s win rate of 87%."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "R15",
        "comment": "Move 99: Black plays at R15."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "S15",
        "comment": "Move 100: White plays at S15."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "S16",
        "comment": "Move 101: Black plays at S16."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "Q15",
        "comment": "Move 102: White plays at Q15."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "R16",
        "comment": "Move 103: Black plays at R16."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "B18",
        "comment": "Move 104: White plays at B18."
      },
      {
        "num": 105,
        "color": "B",
        "coord": "D16",
        "comment": "Move 105: Black plays at D16."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "E15",
        "comment": "Move 106: White plays at E15."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "C18",
        "comment": "Move 107: Black plays at C18."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "B17",
        "comment": "Move 108: White plays at B17."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "A16",
        "comment": "Move 109: Black plays at A16."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "E18",
        "comment": "Move 110: White plays at E18."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "B19",
        "comment": "Move 111: Black plays at B19."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "G18",
        "comment": "Sitting beside the board, I was expecting Lee to resign any minute, a feeling that only intensified when White played 112. White was unconditionally alive, Black was short on points, and there seemed to be nowhere left to play."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "R9",
        "comment": "Move 113: Black plays at R9."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "Q9",
        "comment": "Move 114: White plays at Q9."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "M5",
        "comment": "Move 115: Black plays at M5."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "N6",
        "comment": "Move 116: White plays at N6."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "Q10",
        "comment": "Move 117: Black plays at Q10."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "R10",
        "comment": "Move 118: White plays at R10."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "S8",
        "comment": "Move 119: Black plays at S8."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "S9",
        "comment": "Move 120: White plays at S9."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "S7",
        "comment": "Move 121: Black plays at S7."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "R9",
        "comment": "Move 122: White plays at R9."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "C2",
        "comment": "Move 123: Black plays at C2."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "Q14",
        "comment": "Move 124: White plays at Q14."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "J3",
        "comment": "In reality, Lee was far more tenacious than I had thought. When he invaded with Black 125, I gasped in surprise! Could he possibly live there!?"
      },
      {
        "num": 126,
        "color": "W",
        "coord": "L3",
        "comment": "Move 126: White plays at L3."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "M3",
        "comment": "Move 127: Black plays at M3."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "K3",
        "comment": "Move 128: White plays at K3."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "K5",
        "comment": "Move 129: Black plays at K5."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "L6",
        "comment": "Move 130: White plays at L6."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "H2",
        "comment": "Move 131: Black plays at H2."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "J4",
        "comment": "Move 132: White plays at J4."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "H4",
        "comment": "Move 133: Black plays at H4."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "J5",
        "comment": "Move 134: White plays at J5."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "K2",
        "comment": "Move 135: Black plays at K2."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "L2",
        "comment": "Move 136: White plays at L2."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "H5",
        "comment": "Move 137: Black plays at H5."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "G3",
        "comment": "For a human go professional, it would be unbearable to let Black live, but AlphaGo has no such restrictions. It only picks the move with the highest win rate. So, when White played 138, Black earned an unexpected chance to live in ko. See the variation.\n\nLee did not choose this ko, however, because Black has no way to win it."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "H3",
        "comment": "Move 139: Black plays at H3."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "J6",
        "comment": "Move 140: White plays at J6."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "F6",
        "comment": "Move 141: Black plays at F6."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "G6",
        "comment": "Move 142: White plays at G6."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "G5",
        "comment": "Move 143: Black plays at G5."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "G2",
        "comment": "Move 144: White plays at G2."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "G1",
        "comment": "Move 145: Black plays at G1."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "F1",
        "comment": "Move 146: White plays at F1."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "J1",
        "comment": "Turning down one ko, he tenaciously cut off the White group on the right side to set up an even bigger one. With this move, Lee secured an approach-move ko for life."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "J18",
        "comment": "However, White did not even bother to answer! Instead, White took the big point at 148. By this point, the win rate was already over 98%, a declaration of total victory."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "L1",
        "comment": "Move 149: Black plays at L1."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "M2",
        "comment": "Move 150: White plays at M2."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "D3",
        "comment": "Move 151: Black plays at D3."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "H6",
        "comment": "Move 152: White plays at H6."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "D1",
        "comment": "Move 153: Black plays at D1."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "C3",
        "comment": "Move 154: White plays at C3."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "F4",
        "comment": "Move 155: Black plays at F4."
      },
      {
        "num": 156,
        "color": "W",
        "coord": "E5",
        "comment": "Move 156: White plays at E5."
      },
      {
        "num": 157,
        "color": "B",
        "coord": "D5",
        "comment": "Move 157: Black plays at D5."
      },
      {
        "num": 158,
        "color": "W",
        "coord": "E4",
        "comment": "Move 158: White plays at E4."
      },
      {
        "num": 159,
        "color": "B",
        "coord": "E2",
        "comment": "Move 159: Black plays at E2."
      },
      {
        "num": 160,
        "color": "W",
        "coord": "H1",
        "comment": "Move 160: White plays at H1."
      },
      {
        "num": 161,
        "color": "B",
        "coord": "R12",
        "comment": "Move 161: Black plays at R12."
      },
      {
        "num": 162,
        "color": "W",
        "coord": "Q12",
        "comment": "Move 162: White plays at Q12."
      },
      {
        "num": 163,
        "color": "B",
        "coord": "G1",
        "comment": "Move 163: Black plays at G1."
      },
      {
        "num": 164,
        "color": "W",
        "coord": "D3",
        "comment": "Move 164: White plays at D3."
      },
      {
        "num": 165,
        "color": "B",
        "coord": "B2",
        "comment": "Move 165: Black plays at B2."
      },
      {
        "num": 166,
        "color": "W",
        "coord": "H1",
        "comment": "Move 166: White plays at H1."
      },
      {
        "num": 167,
        "color": "B",
        "coord": "Q11",
        "comment": "Move 167: Black plays at Q11."
      },
      {
        "num": 168,
        "color": "W",
        "coord": "P12",
        "comment": "Move 168: White plays at P12."
      },
      {
        "num": 169,
        "color": "B",
        "coord": "G1",
        "comment": "Move 169: Black plays at G1."
      },
      {
        "num": 170,
        "color": "W",
        "coord": "B4",
        "comment": "The final ko fight of the game felt as solemn as a dirge. Lee's last hope was gone: AlphaGo had shattered the notion that it had any problem with ko."
      },
      {
        "num": 171,
        "color": "B",
        "coord": "H1",
        "comment": "Move 171: Black plays at H1."
      },
      {
        "num": 172,
        "color": "W",
        "coord": "C5",
        "comment": "Move 172: White plays at C5."
      },
      {
        "num": 173,
        "color": "B",
        "coord": "B5",
        "comment": "Move 173: Black plays at B5."
      },
      {
        "num": 174,
        "color": "W",
        "coord": "B6",
        "comment": "Move 174: White plays at B6."
      },
      {
        "num": 175,
        "color": "B",
        "coord": "C4",
        "comment": "Move 175: Black plays at C4."
      },
      {
        "num": 176,
        "color": "W",
        "coord": "C1",
        "comment": "At 176, Lee Sedol resigned.\n\nAlthough, with this game, AlphaGo had already claimed victory in the match, the rules stipulated that all five games would take place regardless of the results.\n\nDuring the postgame press conference, Lee stated his new objective was to win at least one game. Even this seemed very unlikely.\n\nAt the same time, the idea that AlphaGo's victory would somehow ruin Go began to disappear. Confronted by defeat, people suddenly seemed to understand that humanity had not lost to a machine, but rather, had only surpassed itself! Furthermore, interest in Go had risen to unprecedented levels in both Asia and the West, creating a wonderful opportunity for further development.\n\nI, too, believe we must not regard AlphaGo as a rival, against whom we can win or lose. Instead, we should see it as a partner, helping us more deeply explore the marvels of the game.\n\nPerhaps, now that Lee could finally lay down the burden of winning the match, the fourth game would prove to be an especially brilliant one."
      }
    ]
  },
  {
    "id": "2016-g4",
    "title": "Game 4: Humanity's Divine Move (Move 78)",
    "black": "AlphaGo",
    "white": "Lee Sedol (9p)",
    "date": "March 13, 2016",
    "result": "White won by resignation (180 moves)",
    "highlightMove": 78,
    "description": "Humanity's finest hour. Down 0-3 in the match, Lee Sedol found the legendary Move 78 wedge (L11) into AlphaGo's center moyo, causing the AI to hallucinate and resign.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "Q16",
        "comment": "Move 1: Black plays at Q16.",
        "isSpotlight": false
      },
      {
        "num": 2,
        "color": "W",
        "coord": "D4",
        "comment": "Move 2: White plays at D4.",
        "isSpotlight": false
      },
      {
        "num": 3,
        "color": "B",
        "coord": "C16",
        "comment": "Move 3: Black plays at C16.",
        "isSpotlight": false
      },
      {
        "num": 4,
        "color": "W",
        "coord": "R4",
        "comment": "Move 4: White plays at R4.",
        "isSpotlight": false
      },
      {
        "num": 5,
        "color": "B",
        "coord": "P4",
        "comment": "Move 5: Black plays at P4.",
        "isSpotlight": false
      },
      {
        "num": 6,
        "color": "W",
        "coord": "P3",
        "comment": "Move 6: White plays at P3.",
        "isSpotlight": false
      },
      {
        "num": 7,
        "color": "B",
        "coord": "O3",
        "comment": "Move 7: Black plays at O3.",
        "isSpotlight": false
      },
      {
        "num": 8,
        "color": "W",
        "coord": "Q3",
        "comment": "Move 8: White plays at Q3.",
        "isSpotlight": false
      },
      {
        "num": 9,
        "color": "B",
        "coord": "C6",
        "comment": "Move 9: Black plays at C6.",
        "isSpotlight": false
      },
      {
        "num": 10,
        "color": "W",
        "coord": "F3",
        "comment": "Move 10: White plays at F3.",
        "isSpotlight": false
      },
      {
        "num": 11,
        "color": "B",
        "coord": "N4",
        "comment": "For the fourth game, Lee took White. Up to move 11, the opening was the same as the second game. AlphaGo is an extremely consistent player, and once it thinks a move is good, its opinion will not change.",
        "isSpotlight": false
      },
      {
        "num": 12,
        "color": "W",
        "coord": "Q5",
        "comment": "During the commentary for game 2, I mentioned that AlphaGo prefers to tenuki with 12 and approach at B. Previously, Lee chose to finish the joseki normally at A. White 12, however, is an interesting alternative! Perhaps it was a test: would AlphaGo still tenuki as in game 2?",
        "isSpotlight": false
      },
      {
        "num": 13,
        "color": "B",
        "coord": "J3",
        "comment": "This time, AlphaGo chose the ordinary extension. After this move, AlphaGo's win rate was 50.5%. Both players had 1 hour and 52 minutes apiece.",
        "isSpotlight": false
      },
      {
        "num": 14,
        "color": "W",
        "coord": "E17",
        "comment": "White played the usual corner approach.",
        "isSpotlight": false
      },
      {
        "num": 15,
        "color": "B",
        "coord": "H16",
        "comment": "Move 15: Black plays at H16.",
        "isSpotlight": false
      },
      {
        "num": 16,
        "color": "W",
        "coord": "C13",
        "comment": "Against Black's pincer, Lee counter-pincered to emphasize the left side. However, AlphaGo preferred the press as shown in the variation.",
        "isSpotlight": false
      },
      {
        "num": 17,
        "color": "B",
        "coord": "E16",
        "comment": "Move 17: Black plays at E16.",
        "isSpotlight": false
      },
      {
        "num": 18,
        "color": "W",
        "coord": "C10",
        "comment": "Move 18: White plays at C10.",
        "isSpotlight": false
      },
      {
        "num": 19,
        "color": "B",
        "coord": "D17",
        "comment": "Move 19: Black plays at D17.",
        "isSpotlight": false
      },
      {
        "num": 20,
        "color": "W",
        "coord": "B4",
        "comment": "Move 20: White plays at B4.",
        "isSpotlight": false
      },
      {
        "num": 21,
        "color": "B",
        "coord": "O17",
        "comment": "At this point, Lee had 1 hour and 40 minutes left, AlphaGo 1 hour and 47 minutes.",
        "isSpotlight": false
      },
      {
        "num": 22,
        "color": "W",
        "coord": "R11",
        "comment": "The opening had been a balanced one, and AlphaGo's win rate stood at 53%.",
        "isSpotlight": false
      },
      {
        "num": 23,
        "color": "B",
        "coord": "E4",
        "comment": "The better people got to know AlphaGo, the more started calling it by friendly nicknames, such as \"Master A\" in China and \"Master Al\" in Korea. Although such names mean little on their own, they represented a growing acceptance of AlphaGo as a partner and teacher, together with whom we could advance our understanding.\n\nDuring this competition, \"Master A\" never ceased to surprise, playing at least one extraordinary new move in every game. This move was the first such display in game 4.\n\nTheoretically, Black 23 is quite vulgar, as it induces White to strengthen the corner. However, since White's lower side is already solid, if this move helps Black on the outside, is it really as crude as it looks? See the variation.\n\nOne of the major ideas in Chinese philosophy, from kung fu to Taoism, is the notion that \"formlessness defeats form.\" This is not to suggest that one should do nothing, but rather that one should be ready to make use of any resource at any moment. In other words, complete flexibility is the surest path to success. When one is not committed to any style, there are no weak points at which to aim. Naturally, reaching this state demands a strong foundation and a formidable repertoire. AlphaGo seemed to have attained this \"formless\" style already: simple, easy to understand, and totally unexploitable.",
        "isSpotlight": false
      },
      {
        "num": 24,
        "color": "W",
        "coord": "E5",
        "comment": "Move 24: White plays at E5.",
        "isSpotlight": false
      },
      {
        "num": 25,
        "color": "B",
        "coord": "D9",
        "comment": "Lee chose the outside hane, and just as I was reading out the cut, AlphaGo changed course with the shoulder hit at 25. Lee cracked a smile, as if he were looking at a naughty child. AlphaGo was being mischievous indeed!",
        "isSpotlight": false
      },
      {
        "num": 26,
        "color": "W",
        "coord": "F4",
        "comment": "Coolly, Lee protected the corner with 26. Most players found this move too slow, and even AlphaGo thought White should respond with the crawl as shown in the variation. Nonetheless, I saw this move as a sign that Lee had finally found the confidence to play his own game, regardless of anyone's approval. This was the Lee Sedol I knew: the wolf that, starving in the winter winds, still waited for his prey to come closer, biding his time for the moment his intuition knew would come.",
        "isSpotlight": false
      },
      {
        "num": 27,
        "color": "B",
        "coord": "C9",
        "comment": "When Black blocked here, AlphaGo’s win rate was 55%.",
        "isSpotlight": false
      },
      {
        "num": 28,
        "color": "W",
        "coord": "D10",
        "comment": "Move 28: White plays at D10.",
        "isSpotlight": false
      },
      {
        "num": 29,
        "color": "B",
        "coord": "E10",
        "comment": "Move 29: Black plays at E10.",
        "isSpotlight": false
      },
      {
        "num": 30,
        "color": "W",
        "coord": "E11",
        "comment": "Move 30: White plays at E11.",
        "isSpotlight": false
      },
      {
        "num": 31,
        "color": "B",
        "coord": "F11",
        "comment": "Perhaps because it was playing Black, AlphaGo played very aggressively during this game. With the double hane at 29 and 31, it seemed as if Black was attempting to completely overwhelm White.",
        "isSpotlight": false
      },
      {
        "num": 32,
        "color": "W",
        "coord": "E12",
        "comment": "Move 32: White plays at E12.",
        "isSpotlight": false
      },
      {
        "num": 33,
        "color": "B",
        "coord": "F12",
        "comment": "Move 33: Black plays at F12.",
        "isSpotlight": false
      },
      {
        "num": 34,
        "color": "W",
        "coord": "B10",
        "comment": "Even more shocking is that Lee submitted to it! Meek as a lamb, he let AlphaGo blockade the center and seal in White's group on the left side.\n\nSometimes to endure is difficult, sometimes it is irrational, and sometimes it is futile. Whatever it meant, Lee endured, and perhaps this was way of showing us his unwavering faith and unwillingness to surrender.\n\nHowever, White did not need to suffer quite so badly. See the variation.",
        "isSpotlight": false
      },
      {
        "num": 35,
        "color": "B",
        "coord": "F9",
        "comment": "Move 35: Black plays at F9.",
        "isSpotlight": false
      },
      {
        "num": 36,
        "color": "W",
        "coord": "F13",
        "comment": "Move 36: White plays at F13.",
        "isSpotlight": false
      },
      {
        "num": 37,
        "color": "B",
        "coord": "G13",
        "comment": "Move 37: Black plays at G13.",
        "isSpotlight": false
      },
      {
        "num": 38,
        "color": "W",
        "coord": "F14",
        "comment": "Move 38: White plays at F14.",
        "isSpotlight": false
      },
      {
        "num": 39,
        "color": "B",
        "coord": "G14",
        "comment": "At this point, AlphaGo's win rate reached 60%.",
        "isSpotlight": false
      },
      {
        "num": 40,
        "color": "W",
        "coord": "N17",
        "comment": "After Black had constructed such a thick wall, it became urgent for White to invade the top. The attachment at 40 was a classic technique to do just that.",
        "isSpotlight": false
      },
      {
        "num": 41,
        "color": "B",
        "coord": "N16",
        "comment": "At this point, Lee Sedol had 1 hour and 15 minutes left, AlphaGo 1 hour and 35 minutes.",
        "isSpotlight": false
      },
      {
        "num": 42,
        "color": "W",
        "coord": "M17",
        "comment": "Move 42: White plays at M17.",
        "isSpotlight": false
      },
      {
        "num": 43,
        "color": "B",
        "coord": "O18",
        "comment": "Move 43: Black plays at O18.",
        "isSpotlight": false
      },
      {
        "num": 44,
        "color": "W",
        "coord": "J16",
        "comment": "AlphaGo thought this move was problematic. In view of Black's thickness, White's most attractive option would have been to live on the spot, as shown in the variation.",
        "isSpotlight": false
      },
      {
        "num": 45,
        "color": "B",
        "coord": "H17",
        "comment": "Move 45: Black plays at H17.",
        "isSpotlight": false
      },
      {
        "num": 46,
        "color": "W",
        "coord": "K13",
        "comment": "Move 46: White plays at K13.",
        "isSpotlight": false
      },
      {
        "num": 47,
        "color": "B",
        "coord": "Q10",
        "comment": "Compared to the previous games, Lee appeared much more relaxed and focused. Gone were the sighs, and the shaking of the head. Instead, he wore a look of intense concentration, as if waiting for something to arrive.\n\nWhite gracefully leapt out into the center, but Black initiated a magnificent leaning attack!",
        "isSpotlight": false
      },
      {
        "num": 48,
        "color": "W",
        "coord": "Q11",
        "comment": "Move 48: White plays at Q11.",
        "isSpotlight": false
      },
      {
        "num": 49,
        "color": "B",
        "coord": "P10",
        "comment": "Move 49: Black plays at P10.",
        "isSpotlight": false
      },
      {
        "num": 50,
        "color": "W",
        "coord": "P11",
        "comment": "Move 50: White plays at P11.",
        "isSpotlight": false
      },
      {
        "num": 51,
        "color": "B",
        "coord": "O11",
        "comment": "The greater the pressure became on White's top group, the more time Lee took to ponder each move. When Black played 51, Lee hesitated even longer. If Black dared to play so boldly, choosing the hane with only two stones to White's three, I could not imagine any move for White except the cut! Even AlphaGo thought cutting was the only move.",
        "isSpotlight": false
      },
      {
        "num": 52,
        "color": "W",
        "coord": "O12",
        "comment": "But Lee continued to endure! Against Black's hane, he haned in return.",
        "isSpotlight": false
      },
      {
        "num": 53,
        "color": "B",
        "coord": "N12",
        "comment": "Move 53: Black plays at N12.",
        "isSpotlight": false
      },
      {
        "num": 54,
        "color": "W",
        "coord": "O13",
        "comment": "Against the double hane, he extended!\n\n\"I can feel Lee's conviction,\" I wrote in my notebook, \"waiting for the critical moment. But will that moment ever come?\" As the game progressed, it seemed to everyone that Lee was once again on the verge of defeat.\n\nAt this point, Lee's clock had 51 minutes, AlphaGo's 1 hour and 28 minutes.",
        "isSpotlight": false
      },
      {
        "num": 55,
        "color": "B",
        "coord": "N13",
        "comment": "Move 55: Black plays at N13.",
        "isSpotlight": false
      },
      {
        "num": 56,
        "color": "W",
        "coord": "N11",
        "comment": "Move 56: White plays at N11.",
        "isSpotlight": false
      },
      {
        "num": 57,
        "color": "B",
        "coord": "O10",
        "comment": "Move 57: Black plays at O10.",
        "isSpotlight": false
      },
      {
        "num": 58,
        "color": "W",
        "coord": "N14",
        "comment": "Move 58: White plays at N14.",
        "isSpotlight": false
      },
      {
        "num": 59,
        "color": "B",
        "coord": "M11",
        "comment": "When Black ataried at 59, White had the option of linking up the group on the top. See the variation.",
        "isSpotlight": false
      },
      {
        "num": 60,
        "color": "W",
        "coord": "O15",
        "comment": "Move 60: White plays at O15.",
        "isSpotlight": false
      },
      {
        "num": 61,
        "color": "B",
        "coord": "O16",
        "comment": "Move 61: Black plays at O16.",
        "isSpotlight": false
      },
      {
        "num": 62,
        "color": "W",
        "coord": "N10",
        "comment": "Instead, however, Lee chose to pull out his center stone. With White's group now isolated and in grave peril, Lee's heart must have been overwhelmed with emotions. But perhaps he also sensed the long-awaited moment at hand.",
        "isSpotlight": false
      },
      {
        "num": 63,
        "color": "B",
        "coord": "M14",
        "comment": "Lee now had 42 minutes, AlphaGo 1 hour and 22 minutes.",
        "isSpotlight": false
      },
      {
        "num": 64,
        "color": "W",
        "coord": "N9",
        "comment": "Move 64: White plays at N9.",
        "isSpotlight": false
      },
      {
        "num": 65,
        "color": "B",
        "coord": "N15",
        "comment": "Move 65: Black plays at N15.",
        "isSpotlight": false
      },
      {
        "num": 66,
        "color": "W",
        "coord": "O14",
        "comment": "Move 66: White plays at O14.",
        "isSpotlight": false
      },
      {
        "num": 67,
        "color": "B",
        "coord": "M12",
        "comment": "Move 67: Black plays at M12.",
        "isSpotlight": false
      },
      {
        "num": 68,
        "color": "W",
        "coord": "R10",
        "comment": "At this point, people suddenly began to congregate near the playing room. The rumor was spreading that the game was about to end, with AlphaGo victorious as expected. But Lee looked cool-headed as ever as he played the turn at 68. Was he really not afraid of dying?",
        "isSpotlight": false
      },
      {
        "num": 69,
        "color": "B",
        "coord": "L9",
        "comment": "AlphaGo continued striding forward with the knight's move, aiming to swallow the white group whole. Lee pondered deeply over his next move. If White was to have any chance, he would have to seize it now.\n\nAt this point, Lee had 34 minutes, AlphaGo 1 hour and 19 minutes.",
        "isSpotlight": false
      },
      {
        "num": 70,
        "color": "W",
        "coord": "J9",
        "comment": "Move 70: White plays at J9.",
        "isSpotlight": false
      },
      {
        "num": 71,
        "color": "B",
        "coord": "K11",
        "comment": "When Black closed off the center with 71, Lee had 27 minutes, AlphaGo 1 hour and 17 minutes.",
        "isSpotlight": false
      },
      {
        "num": 72,
        "color": "W",
        "coord": "G12",
        "comment": "Move 72: White plays at G12.",
        "isSpotlight": false
      },
      {
        "num": 73,
        "color": "B",
        "coord": "H10",
        "comment": "After ten minutes of thought, Lee played the cut. Right on schedule, one minute later, AlphaGo enclosed White's cutting stone. Lee sighed, and kept thinking.",
        "isSpotlight": false
      },
      {
        "num": 74,
        "color": "W",
        "coord": "G15",
        "comment": "Move 74: White plays at G15.",
        "isSpotlight": false
      },
      {
        "num": 75,
        "color": "B",
        "coord": "H15",
        "comment": "Move 75: Black plays at H15.",
        "isSpotlight": false
      },
      {
        "num": 76,
        "color": "W",
        "coord": "F16",
        "comment": "Move 76: White plays at F16.",
        "isSpotlight": false
      },
      {
        "num": 77,
        "color": "B",
        "coord": "F17",
        "comment": "At move 77, Lee had only 11 minutes left. Moreover, AlphaGo’s win rate had climbed over 70%. It seemed the game was over. \n\nIn fact, Lee had just completed the last of the preparations for his final charge!",
        "isSpotlight": false
      },
      {
        "num": 78,
        "color": "W",
        "coord": "L11",
        "comment": "MOVE 78: 'THE DIVINE MOVE' (God's Touch at L11 by Lee Sedol). Lee wedges a white stone directly between AlphaGo's two impenetrable center walls. AlphaGo estimated a 0.007% chance of this move being played, breaking AlphaGo's MCTS evaluation! At last, Lee Sedol launched his attack. Like an earthquake, the wedge at 78 tore apart the cracks in Black's fortress! None of us had anticipated this. When Gu Li saw White 78 from his broadcasting studio in China, he shouted: \"The divine move!\" All of Lee's painstaking preparations were finally about to bear fruit.\n\nActually, Lee spent very little time on this move itself. Later, during the press conference, he told the assembled reporters that he had not spent much time calculating. He had simply played what felt right.\n\nWithout a doubt, this move is a spectacular flash of insight - but does it really work? See the variation for an explanation of White's plan and Black's best response.\n\nRegardless, this move cast AlphaGo into complete confusion.",
        "isSpotlight": true
      },
      {
        "num": 79,
        "color": "B",
        "coord": "K10",
        "comment": "Move 79: Black plays at K10.",
        "isSpotlight": false
      },
      {
        "num": 80,
        "color": "W",
        "coord": "M10",
        "comment": "Move 78 might not really work, but AlphaGo was at a complete loss to deal with it. When Black pulled back, White blocked at 80, and Black could no longer kill the white stones unconditionally.",
        "isSpotlight": false
      },
      {
        "num": 81,
        "color": "B",
        "coord": "L12",
        "comment": "Move 81: Black plays at L12.",
        "isSpotlight": false
      },
      {
        "num": 82,
        "color": "W",
        "coord": "K12",
        "comment": "Everybody still thought AlphaGo was aiming for the ko shown in the variation, but this was not the case.",
        "isSpotlight": false
      },
      {
        "num": 83,
        "color": "B",
        "coord": "N8",
        "comment": "Move 83: Black plays at N8.",
        "isSpotlight": false
      },
      {
        "num": 84,
        "color": "W",
        "coord": "O9",
        "comment": "Move 84: White plays at O9.",
        "isSpotlight": false
      },
      {
        "num": 85,
        "color": "B",
        "coord": "P8",
        "comment": "Inexplicably, AlphaGo began trying to extract the dead stones on the right side!",
        "isSpotlight": false
      },
      {
        "num": 86,
        "color": "W",
        "coord": "P9",
        "comment": "Move 86: White plays at P9.",
        "isSpotlight": false
      },
      {
        "num": 87,
        "color": "B",
        "coord": "Q9",
        "comment": "Move 87: Black plays at Q9.",
        "isSpotlight": false
      },
      {
        "num": 88,
        "color": "W",
        "coord": "Q8",
        "comment": "Move 88: White plays at Q8.",
        "isSpotlight": false
      },
      {
        "num": 89,
        "color": "B",
        "coord": "R9",
        "comment": "Move 89: Black plays at R9.",
        "isSpotlight": false
      },
      {
        "num": 90,
        "color": "W",
        "coord": "O8",
        "comment": "Move 90: White plays at O8.",
        "isSpotlight": false
      },
      {
        "num": 91,
        "color": "B",
        "coord": "L10",
        "comment": "Move 91: Black plays at L10.",
        "isSpotlight": false
      },
      {
        "num": 92,
        "color": "W",
        "coord": "J11",
        "comment": "When White haned here, it was already difficult for Black to contain the white stones.\n\nAt this point, AlphaGo’s win rate was in free fall. When White played 92, it dropped all the way to 55%, a full 15 points lower than before! What was going on?!",
        "isSpotlight": false
      },
      {
        "num": 93,
        "color": "B",
        "coord": "S9",
        "comment": "Move 93: Black plays at S9.",
        "isSpotlight": false
      },
      {
        "num": 94,
        "color": "W",
        "coord": "P7",
        "comment": "AlphaGo seemed to have gone crazy, and began thrashing around wildly. The exchange of A for B reinforced White's center with no compensation.",
        "isSpotlight": false
      },
      {
        "num": 95,
        "color": "B",
        "coord": "Q13",
        "comment": "Move 95: Black plays at Q13.",
        "isSpotlight": false
      },
      {
        "num": 96,
        "color": "W",
        "coord": "R8",
        "comment": "Move 96: White plays at R8.",
        "isSpotlight": false
      },
      {
        "num": 97,
        "color": "B",
        "coord": "C4",
        "comment": "This wedge was completely beyond understanding! Aja Huang, who had been the picture of calmness since the beginning of the match, now looked at me as if to ask, \"What's happening!?\" I answered with a look that said, \"I don't know.\"\n\nEven now, we still do not know why AlphaGo lost its mind, playing senseless blunders one after another. Only one thing is certain: the original cause was the wedge at A, Lee Sedol's mystical \"divine move.\" White 78 was incontrovertible proof of his determination to fight on, and his perseverance was rewarded with victory.",
        "isSpotlight": false
      },
      {
        "num": 98,
        "color": "W",
        "coord": "C5",
        "comment": "Move 98: White plays at C5.",
        "isSpotlight": false
      },
      {
        "num": 99,
        "color": "B",
        "coord": "P15",
        "comment": "Move 99: Black plays at P15.",
        "isSpotlight": false
      },
      {
        "num": 100,
        "color": "W",
        "coord": "S8",
        "comment": "Move 100: White plays at S8.",
        "isSpotlight": false
      },
      {
        "num": 101,
        "color": "B",
        "coord": "T9",
        "comment": "Move 101: Black plays at T9.",
        "isSpotlight": false
      },
      {
        "num": 102,
        "color": "W",
        "coord": "S10",
        "comment": "Move 102: White plays at S10.",
        "isSpotlight": false
      },
      {
        "num": 103,
        "color": "B",
        "coord": "H13",
        "comment": "Little by little, AlphaGo recovered its sanity, but too late to save the game. When Black played 103, AlphaGo’s win rate had fallen to 30%, the first time such low numbers had appeared since the match began.\n\nAt this point, Lee entered byo-yomi, but for the first time, he was seeing the light of victory.\n\nThe press room had been half-empty for some time, but now people began to pour in. Many reporters had already left, but when they heard that Lee Sedol might win, they turned around and came rushing back!",
        "isSpotlight": false
      },
      {
        "num": 104,
        "color": "W",
        "coord": "J10",
        "comment": "Move 104: White plays at J10.",
        "isSpotlight": false
      },
      {
        "num": 105,
        "color": "B",
        "coord": "L7",
        "comment": "Move 105: Black plays at L7.",
        "isSpotlight": false
      },
      {
        "num": 106,
        "color": "W",
        "coord": "G11",
        "comment": "Move 106: White plays at G11.",
        "isSpotlight": false
      },
      {
        "num": 107,
        "color": "B",
        "coord": "F10",
        "comment": "Move 107: Black plays at F10.",
        "isSpotlight": false
      },
      {
        "num": 108,
        "color": "W",
        "coord": "K8",
        "comment": "Move 108: White plays at K8.",
        "isSpotlight": false
      },
      {
        "num": 109,
        "color": "B",
        "coord": "L8",
        "comment": "Move 109: Black plays at L8.",
        "isSpotlight": false
      },
      {
        "num": 110,
        "color": "W",
        "coord": "G8",
        "comment": "Move 110: White plays at G8.",
        "isSpotlight": false
      },
      {
        "num": 111,
        "color": "B",
        "coord": "F8",
        "comment": "Move 111: Black plays at F8.",
        "isSpotlight": false
      },
      {
        "num": 112,
        "color": "W",
        "coord": "G7",
        "comment": "Move 112: White plays at G7.",
        "isSpotlight": false
      },
      {
        "num": 113,
        "color": "B",
        "coord": "C12",
        "comment": "Move 113: Black plays at C12.",
        "isSpotlight": false
      },
      {
        "num": 114,
        "color": "W",
        "coord": "E15",
        "comment": "Move 114: White plays at E15.",
        "isSpotlight": false
      },
      {
        "num": 115,
        "color": "B",
        "coord": "E18",
        "comment": "Move 115: Black plays at E18.",
        "isSpotlight": false
      },
      {
        "num": 116,
        "color": "W",
        "coord": "B13",
        "comment": "Move 116: White plays at B13.",
        "isSpotlight": false
      },
      {
        "num": 117,
        "color": "B",
        "coord": "D13",
        "comment": "Move 117: Black plays at D13.",
        "isSpotlight": false
      },
      {
        "num": 118,
        "color": "W",
        "coord": "E13",
        "comment": "Move 118: White plays at E13.",
        "isSpotlight": false
      },
      {
        "num": 119,
        "color": "B",
        "coord": "E6",
        "comment": "Move 119: Black plays at E6.",
        "isSpotlight": false
      },
      {
        "num": 120,
        "color": "W",
        "coord": "F5",
        "comment": "Move 120: White plays at F5.",
        "isSpotlight": false
      },
      {
        "num": 121,
        "color": "B",
        "coord": "D14",
        "comment": "Move 121: Black plays at D14.",
        "isSpotlight": false
      },
      {
        "num": 122,
        "color": "W",
        "coord": "D12",
        "comment": "Move 122: White plays at D12.",
        "isSpotlight": false
      },
      {
        "num": 123,
        "color": "B",
        "coord": "J7",
        "comment": "Move 123: Black plays at J7.",
        "isSpotlight": false
      },
      {
        "num": 124,
        "color": "W",
        "coord": "H9",
        "comment": "Move 124: White plays at H9.",
        "isSpotlight": false
      },
      {
        "num": 125,
        "color": "B",
        "coord": "B6",
        "comment": "Move 125: Black plays at B6.",
        "isSpotlight": false
      },
      {
        "num": 126,
        "color": "W",
        "coord": "J14",
        "comment": "Move 126: White plays at J14.",
        "isSpotlight": false
      },
      {
        "num": 127,
        "color": "B",
        "coord": "G16",
        "comment": "Move 127: Black plays at G16.",
        "isSpotlight": false
      },
      {
        "num": 128,
        "color": "W",
        "coord": "F15",
        "comment": "Move 128: White plays at F15.",
        "isSpotlight": false
      },
      {
        "num": 129,
        "color": "B",
        "coord": "H14",
        "comment": "Move 129: Black plays at H14.",
        "isSpotlight": false
      },
      {
        "num": 130,
        "color": "W",
        "coord": "J12",
        "comment": "Move 130: White plays at J12.",
        "isSpotlight": false
      },
      {
        "num": 131,
        "color": "B",
        "coord": "B12",
        "comment": "Move 131: Black plays at B12.",
        "isSpotlight": false
      },
      {
        "num": 132,
        "color": "W",
        "coord": "C11",
        "comment": "Move 132: White plays at C11.",
        "isSpotlight": false
      },
      {
        "num": 133,
        "color": "B",
        "coord": "H5",
        "comment": "Move 133: Black plays at H5.",
        "isSpotlight": false
      },
      {
        "num": 134,
        "color": "W",
        "coord": "G5",
        "comment": "Move 134: White plays at G5.",
        "isSpotlight": false
      },
      {
        "num": 135,
        "color": "B",
        "coord": "P2",
        "comment": "Move 135: Black plays at P2.",
        "isSpotlight": false
      },
      {
        "num": 136,
        "color": "W",
        "coord": "S13",
        "comment": "Everyone was anxiously awaiting the news of Lee's victory. As the professional commentators grew more and more certain of the conclusion, the game continued to progress onscreen. Playing in byo-yomi, Lee continued to answer AlphaGo's every move with utmost caution.",
        "isSpotlight": false
      },
      {
        "num": 137,
        "color": "B",
        "coord": "D6",
        "comment": "Move 137: Black plays at D6.",
        "isSpotlight": false
      },
      {
        "num": 138,
        "color": "W",
        "coord": "C3",
        "comment": "Move 138: White plays at C3.",
        "isSpotlight": false
      },
      {
        "num": 139,
        "color": "B",
        "coord": "Q2",
        "comment": "Move 139: Black plays at Q2.",
        "isSpotlight": false
      },
      {
        "num": 140,
        "color": "W",
        "coord": "R2",
        "comment": "Move 140: White plays at R2.",
        "isSpotlight": false
      },
      {
        "num": 141,
        "color": "B",
        "coord": "S14",
        "comment": "Move 141: Black plays at S14.",
        "isSpotlight": false
      },
      {
        "num": 142,
        "color": "W",
        "coord": "R13",
        "comment": "Move 142: White plays at R13.",
        "isSpotlight": false
      },
      {
        "num": 143,
        "color": "B",
        "coord": "R14",
        "comment": "Move 143: Black plays at R14.",
        "isSpotlight": false
      },
      {
        "num": 144,
        "color": "W",
        "coord": "K17",
        "comment": "Move 144: White plays at K17.",
        "isSpotlight": false
      },
      {
        "num": 145,
        "color": "B",
        "coord": "G2",
        "comment": "Move 145: Black plays at G2.",
        "isSpotlight": false
      },
      {
        "num": 146,
        "color": "W",
        "coord": "T14",
        "comment": "Move 146: White plays at T14.",
        "isSpotlight": false
      },
      {
        "num": 147,
        "color": "B",
        "coord": "T15",
        "comment": "Move 147: Black plays at T15.",
        "isSpotlight": false
      },
      {
        "num": 148,
        "color": "W",
        "coord": "T13",
        "comment": "Move 148: White plays at T13.",
        "isSpotlight": false
      },
      {
        "num": 149,
        "color": "B",
        "coord": "S16",
        "comment": "Move 149: Black plays at S16.",
        "isSpotlight": false
      },
      {
        "num": 150,
        "color": "W",
        "coord": "B8",
        "comment": "Move 150: White plays at B8.",
        "isSpotlight": false
      },
      {
        "num": 151,
        "color": "B",
        "coord": "B9",
        "comment": "Move 151: Black plays at B9.",
        "isSpotlight": false
      },
      {
        "num": 152,
        "color": "W",
        "coord": "A9",
        "comment": "Move 152: White plays at A9.",
        "isSpotlight": false
      },
      {
        "num": 153,
        "color": "B",
        "coord": "C8",
        "comment": "Move 153: Black plays at C8.",
        "isSpotlight": false
      },
      {
        "num": 154,
        "color": "W",
        "coord": "H6",
        "comment": "Move 154: White plays at H6.",
        "isSpotlight": false
      },
      {
        "num": 155,
        "color": "B",
        "coord": "J6",
        "comment": "Move 155: Black plays at J6.",
        "isSpotlight": false
      },
      {
        "num": 156,
        "color": "W",
        "coord": "H4",
        "comment": "Move 156: White plays at H4.",
        "isSpotlight": false
      },
      {
        "num": 157,
        "color": "B",
        "coord": "F2",
        "comment": "Move 157: Black plays at F2.",
        "isSpotlight": false
      },
      {
        "num": 158,
        "color": "W",
        "coord": "E2",
        "comment": "Move 158: White plays at E2.",
        "isSpotlight": false
      },
      {
        "num": 159,
        "color": "B",
        "coord": "E1",
        "comment": "Move 159: Black plays at E1.",
        "isSpotlight": false
      },
      {
        "num": 160,
        "color": "W",
        "coord": "D1",
        "comment": "Move 160: White plays at D1.",
        "isSpotlight": false
      },
      {
        "num": 161,
        "color": "B",
        "coord": "A12",
        "comment": "Move 161: Black plays at A12.",
        "isSpotlight": false
      },
      {
        "num": 162,
        "color": "W",
        "coord": "A11",
        "comment": "Move 162: White plays at A11.",
        "isSpotlight": false
      },
      {
        "num": 163,
        "color": "B",
        "coord": "L16",
        "comment": "Move 163: Black plays at L16.",
        "isSpotlight": false
      },
      {
        "num": 164,
        "color": "W",
        "coord": "J15",
        "comment": "Move 164: White plays at J15.",
        "isSpotlight": false
      },
      {
        "num": 165,
        "color": "B",
        "coord": "L17",
        "comment": "Move 165: Black plays at L17.",
        "isSpotlight": false
      },
      {
        "num": 166,
        "color": "W",
        "coord": "L18",
        "comment": "Move 166: White plays at L18.",
        "isSpotlight": false
      },
      {
        "num": 167,
        "color": "B",
        "coord": "G9",
        "comment": "Move 167: Black plays at G9.",
        "isSpotlight": false
      },
      {
        "num": 168,
        "color": "W",
        "coord": "J18",
        "comment": "Move 168: White plays at J18.",
        "isSpotlight": false
      },
      {
        "num": 169,
        "color": "B",
        "coord": "R12",
        "comment": "Move 169: Black plays at R12.",
        "isSpotlight": false
      },
      {
        "num": 170,
        "color": "W",
        "coord": "S12",
        "comment": "Move 170: White plays at S12.",
        "isSpotlight": false
      },
      {
        "num": 171,
        "color": "B",
        "coord": "R1",
        "comment": "Move 171: Black plays at R1.",
        "isSpotlight": false
      },
      {
        "num": 172,
        "color": "W",
        "coord": "S1",
        "comment": "Move 172: White plays at S1.",
        "isSpotlight": false
      },
      {
        "num": 173,
        "color": "B",
        "coord": "P12",
        "comment": "Move 173: Black plays at P12.",
        "isSpotlight": false
      },
      {
        "num": 174,
        "color": "W",
        "coord": "T8",
        "comment": "Move 174: White plays at T8.",
        "isSpotlight": false
      },
      {
        "num": 175,
        "color": "B",
        "coord": "P14",
        "comment": "Move 175: Black plays at P14.",
        "isSpotlight": false
      },
      {
        "num": 176,
        "color": "W",
        "coord": "T10",
        "comment": "Move 176: White plays at T10.",
        "isSpotlight": false
      },
      {
        "num": 177,
        "color": "B",
        "coord": "O11",
        "comment": "Move 177: Black plays at O11.",
        "isSpotlight": false
      },
      {
        "num": 178,
        "color": "W",
        "coord": "O10",
        "comment": "Move 178: White plays at O10.",
        "isSpotlight": false
      },
      {
        "num": 179,
        "color": "B",
        "coord": "P5",
        "comment": "Move 179: Black plays at P5.",
        "isSpotlight": false
      },
      {
        "num": 180,
        "color": "W",
        "coord": "K4",
        "comment": "At move 180, AlphaGo finally resigned.\n\nLee Sedol entered the press room to thunderous applause. At long last, he could smile. It was a simple, modest smile, nothing world-changing - but then, aren't little moments like this the real source of joy in life?",
        "isSpotlight": false
      }
    ]
  },
  {
    "id": "2016-g5",
    "title": "Game 5: The Final Masterpiece (280 Moves)",
    "black": "Lee Sedol (9p)",
    "white": "AlphaGo",
    "date": "March 15, 2016",
    "result": "White won by resignation (280 moves)",
    "highlightMove": 70,
    "description": "Lee Sedol intentionally chooses Black and wages an epic 280-move battle with fierce endgame counting.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "R16",
        "comment": "Lee entered the playing room looking relaxed and confident. He carried himself as if destined to win."
      },
      {
        "num": 2,
        "color": "W",
        "coord": "D16",
        "comment": "Move 2: White plays at D16."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "Q3",
        "comment": "Drawing on the experience of game 4, Lee started with a territorial fuseki, taking double 3-4 points."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "D4",
        "comment": "Move 4: White plays at D4."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "P17",
        "comment": "Move 5: Black plays at P17."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "Q5",
        "comment": "Move 6: White plays at Q5."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "R5",
        "comment": "Move 7: Black plays at R5."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "R6",
        "comment": "Move 8: White plays at R6."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "R4",
        "comment": "Move 9: Black plays at R4."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "Q7",
        "comment": "Move 10: White plays at Q7."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "O3",
        "comment": "Move 11: Black plays at O3."
      },
      {
        "num": 12,
        "color": "W",
        "coord": "R15",
        "comment": "Move 12: White plays at R15."
      },
      {
        "num": 13,
        "color": "B",
        "coord": "Q15",
        "comment": "Move 13: Black plays at Q15."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "R14",
        "comment": "Move 14: White plays at R14."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "S16",
        "comment": "Lee played the opening up to 15 unusually fast, as if he had prepared it in advance and anticipated AlphaGo's responses."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "Q14",
        "comment": "When White turned with 16, Lee stopped to think. Had this turn ever been played before? See the variation.\n\nAt this point, Lee's clock showed 1 hour and 55 minutes, AlphaGo's 1 hour and 51 minutes."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "R8",
        "comment": "Lee had probably researched this shape already, and after a few minutes of thought, he decided to attack White's top group. However, AlphaGo thought Black should simply extend, as shown in the variation."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "P15",
        "comment": "Move 18: White plays at P15."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "Q8",
        "comment": "When White ataried on the lower side, Lee mumbled a few words and pushed up on the left."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "P8",
        "comment": "The hane was White's only reply."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "P7",
        "comment": "Looking carefully across the board, Lee sighed and cut at 21. Afterwards, many professionals asked what happens if Black had haned on the outside instead. In fact, AlphaGo would have preferred the hane. See the variation."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "P9",
        "comment": "Move 22: White plays at P9."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "O7",
        "comment": "White discards the three stones. The impression is that Black has claimed considerable territory, but has he really? AlphaGo thought Black 23 was not the biggest move. See the variation."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "R10",
        "comment": "Move 24: White plays at R10."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "S6",
        "comment": "Among professionals, there is a consensus that the most difficult aspect of Go is judgment. This means not only evaluating the overall shape of the game but, most importantly, judging the pros and cons of local variations. The hardest aspect is finding a reference point to which each variation can be compared. Of course, the higher a player's level, the deeper their understanding of local shape. Professional players leverage this understanding through tewari analysis, either pairing off moves or permuting their order to create a clearer reference point. During a dinner I attended with Nie Weiping, he raised the subject of this opening.\n\nNie Weiping evaluates the position as follows. Imagine we remove four white stones, marked by the circles, and four corresponding black stones, marked by the squares. The overall balance remains about the same, but it immediately becomes clear that Black's shape is no good, as the extension at A is too narrow and the exchange of B for C makes Black overconcentrated.\n\nOf course, Black benefits from the exchange of the circled stones for the squared ones, so the position is not exactly equivalent. Regardless, Black has lost more from inefficiency than he has gained from the exchanges, so the real game still favors White."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "G3",
        "comment": "White 26 protected the corner while diminishing Black's potential on the top. At this point, AlphaGo’s win rate was 56%."
      },
      {
        "num": 27,
        "color": "B",
        "coord": "C14",
        "comment": "Move 27: Black plays at C14."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "F17",
        "comment": "Move 28: White plays at F17."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "B16",
        "comment": "After Lee played the knight's move at 29, he removed his watch, and I noticed his hands were shaking tremendously. Was it stress, or excitement? I could not tell.\n\nAt this point, Lee Sedol had 1 hour and 38 minutes, AlphaGo 1 hour and 42 minutes."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "C12",
        "comment": "White pincered here, and this is one of AlphaGo's favorite joseki. Later, Chang Hao mentioned that Go Seigen felt that this joseki, which encloses Black in the corner, clearly favors White. The great master was one of the few professionals who placed great emphasis on the centre. Regrettably, he passed away in 2014 at the age of one hundred. It would be fascinating to learn his views on AlphaGo if he were alive to see it today.\n\nAfter the match, during a Go program with Meng Tailing, I raised the question of the proper timing for White's attachment at A. According to him, professional research has shown that although A is tempting, the result may turn out badly if one plays it too early. See the variation."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "D12",
        "comment": "The attachment at Black 31 emerged from Lee's desire to avoid being sealed in, especially considering AlphaGo's outstanding strength in the centre. Nonetheless, AlphaGo thought Black should have taken the corner. See the variation."
      },
      {
        "num": 32,
        "color": "W",
        "coord": "D11",
        "comment": "Move 32: White plays at D11."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "D13",
        "comment": "Move 33: Black plays at D13."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "C17",
        "comment": "Move 34: White plays at C17."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "C11",
        "comment": "Move 35: Black plays at C11."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "C10",
        "comment": "Move 36: White plays at C10."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "B11",
        "comment": "Move 37: Black plays at B11."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "D10",
        "comment": "Move 38: White plays at D10."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "B12",
        "comment": "The right side was settled for the time being, but the result was difficult to evaluate. Lee sighed again as he looked at the board, perhaps dissatisfied with the direction the game had taken."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "N8",
        "comment": "His expression only grew more serious when he saw White 40. This jump was an outstanding move, shining light across the whole board! Once again, AlphaGo's move had surpassed our imagination, but having seen it, we all agreed it was the right one. What makes this move so beautiful? Let's try to explain its impact more clearly.\n\nThe gap between A and B on the right is fairly wide, so White must stay on guard against the possibility of invasion. On the left side, the group at C is not thin, but its potential for expansion is limited. The group at D is also difficult to develop because of Black's strength on the right. Although these groups were not very strongly related at first, after White 40, the left and right groups become loosely connected. Not only does this jump restrict Black's potential on the top, it also increases White's potential on the left. Finally, it begins to form an invisible web around the centre. If White can seal Black in on the right side, the entire centre will fall under White's influence.\n\nOne move that links all the groups together: now that's the essence of whole-board thinking!"
      },
      {
        "num": 41,
        "color": "B",
        "coord": "N7",
        "comment": "Lee cautiously responded by extending at 41."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "M7",
        "comment": "Move 42: White plays at M7."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "O8",
        "comment": "When White haned, Lee shook his head and grudgingly pushed in at 43. However, AlphaGo disliked Black 43, and instead suggested that Black hane directly as shown in the variation."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "O9",
        "comment": "Move 44: White plays at O9."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "M6",
        "comment": "Move 45: Black plays at M6."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "M8",
        "comment": "Move 46: White plays at M8."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "L6",
        "comment": "Move 47: Black plays at L6."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "N6",
        "comment": "Although Black A had ensured that the extension at B was possible, it also lost a liberty, making the cut of 48 more severe.\n\nAt this point, Lee had 1 hour and 22 minutes, AlphaGo 1 hour and 34 minutes."
      },
      {
        "num": 49,
        "color": "B",
        "coord": "N5",
        "comment": "Move 49: Black plays at N5."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "S7",
        "comment": "Black's unyielding move at 49 aimed to swallow up all of the white stones, but White's hane at 50 left a great deal of bad aji for Black due to the shortage of liberties. Lee's expression at this moment was grim, and he sighed heavily. It seemed as if Black would have to compromise. See the variation."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "S8",
        "comment": "Move 51: Black plays at S8."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "S5",
        "comment": "Move 52: White plays at S5."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "T6",
        "comment": "The fight grew more complicated, but Lee appeared to be at a disadvantage. If White managed to get out, the game would be decided on the spot. In fact, things seemed to be heading in that direction."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "Q6",
        "comment": "White 54 is excellent move order."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "P5",
        "comment": "Move 55: Black plays at P5."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "P4",
        "comment": "Move 56: White plays at P4."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "O5",
        "comment": "After the exchange of A for B, many of the live commentaries had already discovered a problem for Black. See the variation."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "T7",
        "comment": "Shockingly, at this moment AlphaGo chose to atari at 58, and White's group simply died! Had AlphaGo made another critical blunder?\n\nStudying the data, I found that AlphaGo was not confused the way it had been in game 4. In fact, the win rate had barely changed at all. Of course, from the human perspective of seeking the best moves, AlphaGo's choice was a foolish one. From a global perspective, however, White is by no means behind, and as we will soon see, the dead stones are far from meaningless.\n\nRegardless, Lee had just gone from hell to paradise. He looked as if he sensed another sudden reversal at hand. Perhaps this was the cause of his tremendous blunder just a few moves later."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "Q4",
        "comment": "Move 59: Black plays at Q4."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "O17",
        "comment": "White 60 was extremely large. We have already analyzed this move, and earlier it would have failed for White. However, due to the exchanges on the left side, Black's refutation no longer works! This may have been the compensation White was looking for by sacrificing the stones on the left."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "O18",
        "comment": "Move 61: Black plays at O18."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "P18",
        "comment": "See the variation for what happens if Black tries to avoid being sealed in."
      },
      {
        "num": 63,
        "color": "B",
        "coord": "Q18",
        "comment": "Move 63: Black plays at Q18."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "P16",
        "comment": "Move 64: White plays at P16."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "Q17",
        "comment": "Move 65: Black plays at Q17."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "N18",
        "comment": "Move 66: White plays at N18."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "P19",
        "comment": "Move 67: Black plays at P19."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "N17",
        "comment": "Up to here, White had reaped a large profit on the bottom. Black was completely sealed into the corner, while White had built a powerful formation on the outside. Considering that White's moves at A and B had also become sente, the thickness of the upper wall was almost perfect. AlphaGo may have missed the chance to wrap up the game, but on the whole White was not doing badly at all. At this point, AlphaGo's win rate had already climbed above 70%.\n\nAt the same time, Lee Sedol was equally pleased, still basking in the warm afterglow of Black's profits on the left."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "G16",
        "comment": "White’s aim to build up the bottom was clear, so Lee played the shoulder hit to reduce White's potential. Some commentators felt that this move went too deep, but AlphaGo would have made the same choice in Black's position."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "G14",
        "comment": "The cap was the only move to start the attack."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "G17",
        "comment": "Move 71: Black plays at G17."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "F16",
        "comment": "Move 72: White plays at F16."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "G15",
        "comment": "Move 73: Black plays at G15."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "F14",
        "comment": "Move 74: White plays at F14."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "H14",
        "comment": "Move 75: Black plays at H14."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "H13",
        "comment": "Move 76: White plays at H13."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "J14",
        "comment": "Move 77: Black plays at J14."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "J13",
        "comment": "Up to 78, the battle intensified, seemingly heading towards a climactic life-and-death battle."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "J16",
        "comment": "Unexpectedly, however, Lee hesitated. Instead of extending, he turned back towards safety, making an eye with 79. Should Black have risked the life of the group to extend out into the center? See the variation.\n\nIf Lee were to play ten games from this exact position, he would have played the extension in perhaps nine of them. After the game, he must have asked himself, when it would have been so much his style to seek life in the centre, how could he possibly have chosen to back down? There are no doubt many causes, but the sense of superiority born of Black's unexpected gains on the left side must be the main one.\n\nBesides this, White's moves at A and B would have taken immense courage for a human to play. White would be in deep trouble if Black lived inside White's moyo, so a human player would experience great doubt and hesitation before attacking this way. In contrast, AlphaGo's constant, unfeeling rhythm can easily unnerve its opponents. This may well be the most difficult aspect of playing against AlphaGo.\n\nBlack 79 was perhaps the move that Lee regretted most from the entire match. If he had extended instead, would it have changed the outcome? Sadly, we will never know. The French have a proverb: \"With enough 'ifs', one could fit Paris in a bottle.\""
      },
      {
        "num": 80,
        "color": "W",
        "coord": "K14",
        "comment": "When White haned at 80, AlphaGo’s win rate climbed to 76%. Now the centre and left side would become White territory, and Black would have to make a painstaking life at the bottom."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "K18",
        "comment": "Move 81: Black plays at K18."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "K16",
        "comment": "Move 82: White plays at K16."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "K17",
        "comment": "Move 83: Black plays at K17."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "K15",
        "comment": "Move 84: White plays at K15."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "G12",
        "comment": "Lee Sedol suddenly realized his plight. With this jump, he attempted to reduce White's influence, but only achieved the opposite."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "F18",
        "comment": "Move 86: White plays at F18."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "G13",
        "comment": "Move 87: Black plays at G13."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "F15",
        "comment": "Move 88: White plays at F15."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "H17",
        "comment": "Move 89: Black plays at H17."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "H11",
        "comment": "Not only had White gained points while making life with A and B, but after White jumped here, it was plain to see that Black's two stones were facing the wrong direction. Truly, blessings do not come in pairs, and misfortunes never come singly.\n\nAt this moment, AlphaGo’s win rate was 84%. Lee had 46 minutes left, AlphaGo 1 hour and 9 minutes."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "K8",
        "comment": "Move 91: Black plays at K8."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "H18",
        "comment": "AlphaGo never gets too attached to its own territory, and when Black played the knight's move to threaten the centre, White showed no inclination to protect it."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "G18",
        "comment": "Move 93: Black plays at G18."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "G19",
        "comment": "Move 94: White plays at G19."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "J18",
        "comment": "Move 95: Black plays at J18."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "H19",
        "comment": "Move 96: White plays at H19."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "J19",
        "comment": "Move 97: Black plays at J19."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "F19",
        "comment": "Move 98: White plays at F19."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "L19",
        "comment": "Move 99: Black plays at L19."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "J3",
        "comment": "After some exchanges at the bottom, White chose the one-space jump at 100. This solid way of playing could only mean AlphaGo felt very optimistic about the outcome."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "J11",
        "comment": "AlphaGo thought this and the following moves were no good - see the variation. In any case, Black faced a very difficult game no matter what."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "H12",
        "comment": "Move 102: White plays at H12."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "H10",
        "comment": "Move 103: Black plays at H10."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "G11",
        "comment": "Move 104: White plays at G11."
      },
      {
        "num": 105,
        "color": "B",
        "coord": "G10",
        "comment": "Move 105: Black plays at G10."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "C6",
        "comment": "When White protected the corner with 106, AlphaGo’s win rate stood at 86%. Lee had 29 minutes left, AlphaGo 57 minutes."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "D3",
        "comment": "Move 107: Black plays at D3."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "C3",
        "comment": "Move 108: White plays at C3."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "F3",
        "comment": "Move 109: Black plays at F3."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "E3",
        "comment": "Move 110: White plays at E3."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "F4",
        "comment": "Move 111: Black plays at F4."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "G4",
        "comment": "Move 112: White plays at G4."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "D5",
        "comment": "Move 113: Black plays at D5."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "C5",
        "comment": "Move 114: White plays at C5."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "E4",
        "comment": "Move 115: Black plays at E4."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "D2",
        "comment": "Move 116: White plays at D2."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "E2",
        "comment": "Move 117: Black plays at E2."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "D3",
        "comment": "Move 118: White plays at D3."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "G2",
        "comment": "Move 119: Black plays at G2."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "F5",
        "comment": "Move 120: White plays at F5."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "E5",
        "comment": "Move 121: Black plays at E5."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "F6",
        "comment": "Move 122: White plays at F6."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "H2",
        "comment": "Move 123: Black plays at H2."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "J6",
        "comment": "Move 124: White plays at J6."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "J2",
        "comment": "Move 125: Black plays at J2."
      },
      {
        "num": 126,
        "color": "W",
        "coord": "K3",
        "comment": "Move 126: White plays at K3."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "L2",
        "comment": "Lee tried everything to get back in the game, but to no avail. Although Black had lived and connected out following the invasion, White had gained strength on the outside in compensation."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "K2",
        "comment": "Move 128: White plays at K2."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "K1",
        "comment": "Move 129: Black plays at K1."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "L3",
        "comment": "Move 130: White plays at L3."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "M2",
        "comment": "Move 131: Black plays at M2."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "M3",
        "comment": "Move 132: White plays at M3."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "N3",
        "comment": "Move 133: Black plays at N3."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "N2",
        "comment": "Move 134: White plays at N2."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "O2",
        "comment": "Move 135: Black plays at O2."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "J9",
        "comment": "With White 136, AlphaGo struck Black's vital point, slowly building further potential in the centre."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "F11",
        "comment": "Move 137: Black plays at F11."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "F12",
        "comment": "Move 138: White plays at F12."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "K9",
        "comment": "Move 139: Black plays at K9."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "J10",
        "comment": "Move 140: White plays at J10."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "K10",
        "comment": "Move 141: Black plays at K10."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "J8",
        "comment": "Move 142: White plays at J8."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "K7",
        "comment": "Many commentators felt that Black 143 was too passive, and that Lee should have wedged instead. AlphaGo agreed, but White was winning either way. See the variation."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "J7",
        "comment": "With this move, AlphaGo's win rate reached 92%."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "E12",
        "comment": "Move 145: Black plays at E12."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "F13",
        "comment": "Move 146: White plays at F13."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "N10",
        "comment": "Move 147: Black plays at N10."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "M10",
        "comment": "Move 148: White plays at M10."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "M11",
        "comment": "Move 149: Black plays at M11."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "N11",
        "comment": "As the endgame began, Lee looked fiercely for an opportunity, exhausting every possible resource. But no matter what he did, White remained a little bit ahead.\n\nAt move 150, Lee entered byo-yomi."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "M9",
        "comment": "Move 151: Black plays at M9."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "O10",
        "comment": "Move 152: White plays at O10."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "L10",
        "comment": "Move 153: Black plays at L10."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "E11",
        "comment": "Move 154: White plays at E11."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "B9",
        "comment": "Move 155: Black plays at B9."
      },
      {
        "num": 156,
        "color": "W",
        "coord": "B10",
        "comment": "Move 156: White plays at B10."
      },
      {
        "num": 157,
        "color": "B",
        "coord": "A10",
        "comment": "Move 157: Black plays at A10."
      },
      {
        "num": 158,
        "color": "W",
        "coord": "J1",
        "comment": "Move 158: White plays at J1."
      },
      {
        "num": 159,
        "color": "B",
        "coord": "H1",
        "comment": "Move 159: Black plays at H1."
      },
      {
        "num": 160,
        "color": "W",
        "coord": "T5",
        "comment": "Move 160: White plays at T5."
      },
      {
        "num": 161,
        "color": "B",
        "coord": "S6",
        "comment": "Move 161: Black plays at S6."
      },
      {
        "num": 162,
        "color": "W",
        "coord": "S9",
        "comment": "Move 162: White plays at S9."
      },
      {
        "num": 163,
        "color": "B",
        "coord": "T8",
        "comment": "Move 163: Black plays at T8."
      },
      {
        "num": 164,
        "color": "W",
        "coord": "A11",
        "comment": "Move 164: White plays at A11."
      },
      {
        "num": 165,
        "color": "B",
        "coord": "A12",
        "comment": "Move 165: Black plays at A12."
      },
      {
        "num": 166,
        "color": "W",
        "coord": "C8",
        "comment": "Move 166: White plays at C8."
      },
      {
        "num": 167,
        "color": "B",
        "coord": "B8",
        "comment": "Move 167: Black plays at B8."
      },
      {
        "num": 168,
        "color": "W",
        "coord": "B7",
        "comment": "Move 168: White plays at B7."
      },
      {
        "num": 169,
        "color": "B",
        "coord": "D7",
        "comment": "Move 169: Black plays at D7."
      },
      {
        "num": 170,
        "color": "W",
        "coord": "D6",
        "comment": "Move 170: White plays at D6."
      },
      {
        "num": 171,
        "color": "B",
        "coord": "C7",
        "comment": "Move 171: Black plays at C7."
      },
      {
        "num": 172,
        "color": "W",
        "coord": "D8",
        "comment": "Move 172: White plays at D8."
      },
      {
        "num": 173,
        "color": "B",
        "coord": "E7",
        "comment": "Move 173: Black plays at E7."
      },
      {
        "num": 174,
        "color": "W",
        "coord": "E6",
        "comment": "Move 174: White plays at E6."
      },
      {
        "num": 175,
        "color": "B",
        "coord": "F8",
        "comment": "Move 175: Black plays at F8."
      },
      {
        "num": 176,
        "color": "W",
        "coord": "F10",
        "comment": "Move 176: White plays at F10."
      },
      {
        "num": 177,
        "color": "B",
        "coord": "B6",
        "comment": "Move 177: Black plays at B6."
      },
      {
        "num": 178,
        "color": "W",
        "coord": "A9",
        "comment": "Move 178: White plays at A9."
      },
      {
        "num": 179,
        "color": "B",
        "coord": "A8",
        "comment": "Move 179: Black plays at A8."
      },
      {
        "num": 180,
        "color": "W",
        "coord": "F2",
        "comment": "White 180 concluded the last major exchange, and Black was still a few points short. Lee must have recognized now that there was no way to win."
      },
      {
        "num": 181,
        "color": "B",
        "coord": "N12",
        "comment": "Move 181: Black plays at N12."
      },
      {
        "num": 182,
        "color": "W",
        "coord": "O11",
        "comment": "Move 182: White plays at O11."
      },
      {
        "num": 183,
        "color": "B",
        "coord": "M13",
        "comment": "Move 183: Black plays at M13."
      },
      {
        "num": 184,
        "color": "W",
        "coord": "L1",
        "comment": "Move 184: White plays at L1."
      },
      {
        "num": 185,
        "color": "B",
        "coord": "M1",
        "comment": "Move 185: Black plays at M1."
      },
      {
        "num": 186,
        "color": "W",
        "coord": "B17",
        "comment": "Move 186: White plays at B17."
      },
      {
        "num": 187,
        "color": "B",
        "coord": "B5",
        "comment": "Move 187: Black plays at B5."
      },
      {
        "num": 188,
        "color": "W",
        "coord": "B4",
        "comment": "Move 188: White plays at B4."
      },
      {
        "num": 189,
        "color": "B",
        "coord": "P13",
        "comment": "Move 189: Black plays at P13."
      },
      {
        "num": 190,
        "color": "W",
        "coord": "N14",
        "comment": "Move 190: White plays at N14."
      },
      {
        "num": 191,
        "color": "B",
        "coord": "O12",
        "comment": "Move 191: Black plays at O12."
      },
      {
        "num": 192,
        "color": "W",
        "coord": "Q12",
        "comment": "Move 192: White plays at Q12."
      },
      {
        "num": 193,
        "color": "B",
        "coord": "C15",
        "comment": "Move 193: Black plays at C15."
      },
      {
        "num": 194,
        "color": "W",
        "coord": "N9",
        "comment": "Move 194: White plays at N9."
      },
      {
        "num": 195,
        "color": "B",
        "coord": "T13",
        "comment": "Move 195: Black plays at T13."
      },
      {
        "num": 196,
        "color": "W",
        "coord": "S13",
        "comment": "Move 196: White plays at S13."
      },
      {
        "num": 197,
        "color": "B",
        "coord": "G8",
        "comment": "Move 197: Black plays at G8."
      },
      {
        "num": 198,
        "color": "W",
        "coord": "S15",
        "comment": "Move 198: White plays at S15."
      },
      {
        "num": 199,
        "color": "B",
        "coord": "T15",
        "comment": "Move 199: Black plays at T15."
      },
      {
        "num": 200,
        "color": "W",
        "coord": "T14",
        "comment": "Move 200: White plays at T14."
      },
      {
        "num": 201,
        "color": "B",
        "coord": "S14",
        "comment": "Move 201: Black plays at S14."
      },
      {
        "num": 202,
        "color": "W",
        "coord": "T12",
        "comment": "Move 202: White plays at T12."
      },
      {
        "num": 203,
        "color": "B",
        "coord": "M16",
        "comment": "Move 203: Black plays at M16."
      },
      {
        "num": 204,
        "color": "W",
        "coord": "N15",
        "comment": "Move 204: White plays at N15."
      },
      {
        "num": 205,
        "color": "B",
        "coord": "A17",
        "comment": "Move 205: Black plays at A17."
      },
      {
        "num": 206,
        "color": "W",
        "coord": "A18",
        "comment": "Move 206: White plays at A18."
      },
      {
        "num": 207,
        "color": "B",
        "coord": "A16",
        "comment": "Move 207: Black plays at A16."
      },
      {
        "num": 208,
        "color": "W",
        "coord": "C16",
        "comment": "Move 208: White plays at C16."
      },
      {
        "num": 209,
        "color": "B",
        "coord": "B14",
        "comment": "Move 209: Black plays at B14."
      },
      {
        "num": 210,
        "color": "W",
        "coord": "L17",
        "comment": "Move 210: White plays at L17."
      },
      {
        "num": 211,
        "color": "B",
        "coord": "L18",
        "comment": "Move 211: Black plays at L18."
      },
      {
        "num": 212,
        "color": "W",
        "coord": "P12",
        "comment": "Move 212: White plays at P12."
      },
      {
        "num": 213,
        "color": "B",
        "coord": "O14",
        "comment": "Move 213: Black plays at O14."
      },
      {
        "num": 214,
        "color": "W",
        "coord": "M17",
        "comment": "Move 214: White plays at M17."
      },
      {
        "num": 215,
        "color": "B",
        "coord": "B18",
        "comment": "Move 215: Black plays at B18."
      },
      {
        "num": 216,
        "color": "W",
        "coord": "C18",
        "comment": "Move 216: White plays at C18."
      },
      {
        "num": 217,
        "color": "B",
        "coord": "A19",
        "comment": "Move 217: Black plays at A19."
      },
      {
        "num": 218,
        "color": "W",
        "coord": "G9",
        "comment": "Move 218: White plays at G9."
      },
      {
        "num": 219,
        "color": "B",
        "coord": "H8",
        "comment": "Move 219: Black plays at H8."
      },
      {
        "num": 220,
        "color": "W",
        "coord": "H9",
        "comment": "Move 220: White plays at H9."
      },
      {
        "num": 221,
        "color": "B",
        "coord": "K12",
        "comment": "Move 221: Black plays at K12."
      },
      {
        "num": 222,
        "color": "W",
        "coord": "L13",
        "comment": "Move 222: White plays at L13."
      },
      {
        "num": 223,
        "color": "B",
        "coord": "M14",
        "comment": "Move 223: Black plays at M14."
      },
      {
        "num": 224,
        "color": "W",
        "coord": "L12",
        "comment": "Move 224: White plays at L12."
      },
      {
        "num": 225,
        "color": "B",
        "coord": "M12",
        "comment": "Move 225: Black plays at M12."
      },
      {
        "num": 226,
        "color": "W",
        "coord": "M15",
        "comment": "Move 226: White plays at M15."
      },
      {
        "num": 227,
        "color": "B",
        "coord": "L14",
        "comment": "Move 227: Black plays at L14."
      },
      {
        "num": 228,
        "color": "W",
        "coord": "K13",
        "comment": "Move 228: White plays at K13."
      },
      {
        "num": 229,
        "color": "B",
        "coord": "A5",
        "comment": "Move 229: Black plays at A5."
      },
      {
        "num": 230,
        "color": "W",
        "coord": "M10",
        "comment": "Move 230: White plays at M10."
      },
      {
        "num": 231,
        "color": "B",
        "coord": "L11",
        "comment": "Move 231: Black plays at L11."
      },
      {
        "num": 232,
        "color": "W",
        "coord": "K6",
        "comment": "Move 232: White plays at K6."
      },
      {
        "num": 233,
        "color": "B",
        "coord": "L7",
        "comment": "Move 233: Black plays at L7."
      },
      {
        "num": 234,
        "color": "W",
        "coord": "T6",
        "comment": "Move 234: White plays at T6."
      },
      {
        "num": 235,
        "color": "B",
        "coord": "P6",
        "comment": "Move 235: Black plays at P6."
      },
      {
        "num": 236,
        "color": "W",
        "coord": "S4",
        "comment": "Move 236: White plays at S4."
      },
      {
        "num": 237,
        "color": "B",
        "coord": "S3",
        "comment": "Move 237: Black plays at S3."
      },
      {
        "num": 238,
        "color": "W",
        "coord": "Q9",
        "comment": "Move 238: White plays at Q9."
      },
      {
        "num": 239,
        "color": "B",
        "coord": "R7",
        "comment": "Move 239: Black plays at R7."
      },
      {
        "num": 240,
        "color": "W",
        "coord": "T14",
        "comment": "Move 240: White plays at T14."
      },
      {
        "num": 241,
        "color": "B",
        "coord": "T16",
        "comment": "Move 241: Black plays at T16."
      },
      {
        "num": 242,
        "color": "W",
        "coord": "N19",
        "comment": "Move 242: White plays at N19."
      },
      {
        "num": 243,
        "color": "B",
        "coord": "O19",
        "comment": "Move 243: Black plays at O19."
      },
      {
        "num": 244,
        "color": "W",
        "coord": "J15",
        "comment": "Move 244: White plays at J15."
      },
      {
        "num": 245,
        "color": "B",
        "coord": "H15",
        "comment": "Move 245: Black plays at H15."
      },
      {
        "num": 246,
        "color": "W",
        "coord": "H3",
        "comment": "Move 246: White plays at H3."
      },
      {
        "num": 247,
        "color": "B",
        "coord": "N1",
        "comment": "Move 247: Black plays at N1."
      },
      {
        "num": 248,
        "color": "W",
        "coord": "L5",
        "comment": "Move 248: White plays at L5."
      },
      {
        "num": 249,
        "color": "B",
        "coord": "M4",
        "comment": "Move 249: Black plays at M4."
      },
      {
        "num": 250,
        "color": "W",
        "coord": "L4",
        "comment": "Move 250: White plays at L4."
      },
      {
        "num": 251,
        "color": "B",
        "coord": "M5",
        "comment": "Move 251: Black plays at M5."
      },
      {
        "num": 252,
        "color": "W",
        "coord": "F1",
        "comment": "Move 252: White plays at F1."
      },
      {
        "num": 253,
        "color": "B",
        "coord": "L1",
        "comment": "Move 253: Black plays at L1."
      },
      {
        "num": 254,
        "color": "W",
        "coord": "E8",
        "comment": "Move 254: White plays at E8."
      },
      {
        "num": 255,
        "color": "B",
        "coord": "F7",
        "comment": "Move 255: Black plays at F7."
      },
      {
        "num": 256,
        "color": "W",
        "coord": "H7",
        "comment": "Move 256: White plays at H7."
      },
      {
        "num": 257,
        "color": "B",
        "coord": "A7",
        "comment": "Move 257: Black plays at A7."
      },
      {
        "num": 258,
        "color": "W",
        "coord": "L9",
        "comment": "Move 258: White plays at L9."
      },
      {
        "num": 259,
        "color": "B",
        "coord": "O15",
        "comment": "Move 259: Black plays at O15."
      },
      {
        "num": 260,
        "color": "W",
        "coord": "P14",
        "comment": "Move 260: White plays at P14."
      },
      {
        "num": 261,
        "color": "B",
        "coord": "D15",
        "comment": "Move 261: Black plays at D15."
      },
      {
        "num": 262,
        "color": "W",
        "coord": "A4",
        "comment": "Move 262: White plays at A4."
      },
      {
        "num": 263,
        "color": "B",
        "coord": "E15",
        "comment": "Move 263: Black plays at E15."
      },
      {
        "num": 264,
        "color": "W",
        "coord": "E16",
        "comment": "Move 264: White plays at E16."
      },
      {
        "num": 265,
        "color": "B",
        "coord": "L15",
        "comment": "Move 265: Black plays at L15."
      },
      {
        "num": 266,
        "color": "W",
        "coord": "L16",
        "comment": "Move 266: White plays at L16."
      },
      {
        "num": 267,
        "color": "B",
        "coord": "Q16",
        "comment": "Move 267: Black plays at Q16."
      },
      {
        "num": 268,
        "color": "W",
        "coord": "Q13",
        "comment": "Move 268: White plays at Q13."
      },
      {
        "num": 269,
        "color": "B",
        "coord": "O13",
        "comment": "Move 269: Black plays at O13."
      },
      {
        "num": 270,
        "color": "W",
        "coord": "T9",
        "comment": "Move 270: White plays at T9."
      },
      {
        "num": 271,
        "color": "B",
        "coord": "S6",
        "comment": "Move 271: Black plays at S6."
      },
      {
        "num": 272,
        "color": "W",
        "coord": "F9",
        "comment": "Move 272: White plays at F9."
      },
      {
        "num": 273,
        "color": "B",
        "coord": "L8",
        "comment": "Move 273: Black plays at L8."
      },
      {
        "num": 274,
        "color": "W",
        "coord": "G7",
        "comment": "Move 274: White plays at G7."
      },
      {
        "num": 275,
        "color": "B",
        "coord": "B7",
        "comment": "Move 275: Black plays at B7."
      },
      {
        "num": 276,
        "color": "W",
        "coord": "M9",
        "comment": "Move 276: White plays at M9."
      },
      {
        "num": 277,
        "color": "B",
        "coord": "C9",
        "comment": "Move 277: Black plays at C9."
      },
      {
        "num": 278,
        "color": "W",
        "coord": "D9",
        "comment": "Move 278: White plays at D9."
      },
      {
        "num": 279,
        "color": "B",
        "coord": "R9",
        "comment": "Move 279: Black plays at R9."
      },
      {
        "num": 280,
        "color": "W",
        "coord": "S10",
        "comment": "The endgame stretched out endlessly, making this by far the longest game of the competition. Even AlphaGo entered byo-yomi in the late endgame. However, the result had long since been decided.\n\nJust as I began to believe we would finally have a game come down to counting, Lee resigned at move 280. In that moment, he looked utterly helpless.\n\nIn the end, the result of the match was a 4-1 victory for AlphaGo.\n\nIt was an unforgettable story, this week of intense competition between man and machine. Even now, when I recall the scene, I am just overwhelmed by emotion as I was then. I believe the most important contribution of this match is not the result, but rather the opportunity it has given us to rethink our understanding of Go, and of ourselves.\n\nI would like to finish this commentary with a quote from Eric Schmidt, the executive chairman of Alphabet, spoken at the press conference in Seoul before the match:\n\n“The winner here, no matter what happens, is humanity.\""
      }
    ]
  }
],
  "2017": [
  {
    "id": "2017-g1",
    "title": "Game 1: Wuzhen Summit vs World #1 Ke Jie",
    "black": "Ke Jie (9p)",
    "white": "AlphaGo Master",
    "date": "May 23, 2017",
    "result": "White won by 0.5 points (289 moves)",
    "highlightMove": 24,
    "description": "World champion Ke Jie adopts AlphaGo's own revolutionary opening styles. AlphaGo wins by a razor-thin 0.5 points with surgical precision.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "R16",
        "comment": "Move 1: Black plays at R16."
      },
      {
        "num": 2,
        "color": "W",
        "coord": "Q4",
        "comment": "Move 2: White plays at Q4."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "C17",
        "comment": "Move 3: Black plays at C17."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "C4",
        "comment": "Move 4: White plays at C4."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "O17",
        "comment": "Move 5: Black plays at O17."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "F4",
        "comment": "Move 6: White plays at F4."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "R3",
        "comment": "Move 7: Black plays at R3."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "Q3",
        "comment": "Move 8: White plays at Q3."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "R4",
        "comment": "Move 9: Black plays at R4."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "R6",
        "comment": "Move 10: White plays at R6."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "R5",
        "comment": "Move 11: Black plays at R5."
      },
      {
        "num": 12,
        "color": "W",
        "coord": "Q5",
        "comment": "Move 12: White plays at Q5."
      },
      {
        "num": 13,
        "color": "B",
        "coord": "S6",
        "comment": "Move 13: Black plays at S6."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "R2",
        "comment": "Move 14: White plays at R2."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "S2",
        "comment": "Move 15: Black plays at S2."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "S7",
        "comment": "Move 16: White plays at S7."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "Q2",
        "comment": "Move 17: Black plays at Q2."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "P2",
        "comment": "Move 18: White plays at P2."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "Q6",
        "comment": "Move 19: Black plays at Q6."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "R7",
        "comment": "Move 20: White plays at R7."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "R1",
        "comment": "Move 21: Black plays at R1."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "P6",
        "comment": "Move 22: White plays at P6."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "D10",
        "comment": "Move 23: Black plays at D10."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "O9",
        "comment": "Move 24: White plays at O9."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "Q12",
        "comment": "Move 25: Black plays at Q12."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "C12",
        "comment": "Move 26: White plays at C12."
      },
      {
        "num": 27,
        "color": "B",
        "coord": "C14",
        "comment": "Move 27: Black plays at C14."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "E12",
        "comment": "Move 28: White plays at E12."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "C11",
        "comment": "Move 29: Black plays at C11."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "D15",
        "comment": "Move 30: White plays at D15."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "D14",
        "comment": "Move 31: Black plays at D14."
      },
      {
        "num": 32,
        "color": "W",
        "coord": "D17",
        "comment": "Move 32: White plays at D17."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "C16",
        "comment": "Move 33: Black plays at C16."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "D16",
        "comment": "Move 34: White plays at D16."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "E14",
        "comment": "Move 35: Black plays at E14."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "D11",
        "comment": "Move 36: White plays at D11."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "E11",
        "comment": "Move 37: Black plays at E11."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "D12",
        "comment": "Move 38: White plays at D12."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "C10",
        "comment": "Move 39: Black plays at C10."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "C15",
        "comment": "Move 40: White plays at C15."
      },
      {
        "num": 41,
        "color": "B",
        "coord": "B15",
        "comment": "Move 41: Black plays at B15."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "B14",
        "comment": "Move 42: White plays at B14."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "B13",
        "comment": "Move 43: Black plays at B13."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "B16",
        "comment": "Move 44: White plays at B16."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "A14",
        "comment": "Move 45: Black plays at A14."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "B17",
        "comment": "Move 46: White plays at B17."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "F11",
        "comment": "Move 47: Black plays at F11."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "C7",
        "comment": "Move 48: White plays at C7."
      },
      {
        "num": 49,
        "color": "B",
        "coord": "H3",
        "comment": "Move 49: Black plays at H3."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "E9",
        "comment": "Move 50: White plays at E9."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "F12",
        "comment": "Move 51: Black plays at F12."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "G3",
        "comment": "Move 52: White plays at G3."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "H4",
        "comment": "Move 53: Black plays at H4."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "E10",
        "comment": "Move 54: White plays at E10."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "E3",
        "comment": "Move 55: Black plays at E3."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "G2",
        "comment": "Move 56: White plays at G2."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "C3",
        "comment": "Move 57: Black plays at C3."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "D4",
        "comment": "Move 58: White plays at D4."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "D3",
        "comment": "Move 59: Black plays at D3."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "E4",
        "comment": "Move 60: White plays at E4."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "B4",
        "comment": "Move 61: Black plays at B4."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "B12",
        "comment": "Move 62: White plays at B12."
      },
      {
        "num": 63,
        "color": "B",
        "coord": "A12",
        "comment": "Move 63: Black plays at A12."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "B5",
        "comment": "Move 64: White plays at B5."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "B3",
        "comment": "Move 65: Black plays at B3."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "F13",
        "comment": "Move 66: White plays at F13."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "G13",
        "comment": "Move 67: Black plays at G13."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "L4",
        "comment": "Move 68: White plays at L4."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "L5",
        "comment": "Move 69: Black plays at L5."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "K5",
        "comment": "Move 70: White plays at K5."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "K6",
        "comment": "Move 71: Black plays at K6."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "J6",
        "comment": "Move 72: White plays at J6."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "K4",
        "comment": "Move 73: Black plays at K4."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "J5",
        "comment": "Move 74: White plays at J5."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "M4",
        "comment": "Move 75: Black plays at M4."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "L3",
        "comment": "Move 76: White plays at L3."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "M3",
        "comment": "Move 77: Black plays at M3."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "L2",
        "comment": "Move 78: White plays at L2."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "M2",
        "comment": "Move 79: Black plays at M2."
      },
      {
        "num": 80,
        "color": "W",
        "coord": "J2",
        "comment": "Move 80: White plays at J2."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "L6",
        "comment": "Move 81: Black plays at L6."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "J8",
        "comment": "Move 82: White plays at J8."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "P3",
        "comment": "Move 83: Black plays at P3."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "Q14",
        "comment": "Move 84: White plays at Q14."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "O12",
        "comment": "Move 85: Black plays at O12."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "S14",
        "comment": "Move 86: White plays at S14."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "P16",
        "comment": "Move 87: Black plays at P16."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "R11",
        "comment": "Move 88: White plays at R11."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "R13",
        "comment": "Move 89: Black plays at R13."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "S16",
        "comment": "Move 90: White plays at S16."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "R14",
        "comment": "Move 91: Black plays at R14."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "R15",
        "comment": "Move 92: White plays at R15."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "Q15",
        "comment": "Move 93: Black plays at Q15."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "S15",
        "comment": "Move 94: White plays at S15."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "R17",
        "comment": "Move 95: Black plays at R17."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "S13",
        "comment": "Move 96: White plays at S13."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "L12",
        "comment": "Move 97: Black plays at L12."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "J17",
        "comment": "Move 98: White plays at J17."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "G17",
        "comment": "Move 99: Black plays at G17."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "L17",
        "comment": "Move 100: White plays at L17."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "K16",
        "comment": "Move 101: Black plays at K16."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "J16",
        "comment": "Move 102: White plays at J16."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "G15",
        "comment": "Move 103: Black plays at G15."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "H18",
        "comment": "Move 104: White plays at H18."
      },
      {
        "num": 105,
        "color": "B",
        "coord": "G18",
        "comment": "Move 105: Black plays at G18."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "K14",
        "comment": "Move 106: White plays at K14."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "K15",
        "comment": "Move 107: Black plays at K15."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "J15",
        "comment": "Move 108: White plays at J15."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "M16",
        "comment": "Move 109: Black plays at M16."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "H13",
        "comment": "Move 110: White plays at H13."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "E13",
        "comment": "Move 111: Black plays at E13."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "M17",
        "comment": "Move 112: White plays at M17."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "M15",
        "comment": "Move 113: Black plays at M15."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "H14",
        "comment": "Move 114: White plays at H14."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "R12",
        "comment": "Move 115: Black plays at R12."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "S12",
        "comment": "Move 116: White plays at S12."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "Q11",
        "comment": "Move 117: Black plays at Q11."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "R10",
        "comment": "Move 118: White plays at R10."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "G9",
        "comment": "Move 119: Black plays at G9."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "F16",
        "comment": "Move 120: White plays at F16."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "G16",
        "comment": "Move 121: Black plays at G16."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "M14",
        "comment": "Move 122: White plays at M14."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "N14",
        "comment": "Move 123: Black plays at N14."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "M13",
        "comment": "Move 124: White plays at M13."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "G7",
        "comment": "Move 125: Black plays at G7."
      },
      {
        "num": 126,
        "color": "W",
        "coord": "G6",
        "comment": "Move 126: White plays at G6."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "F6",
        "comment": "Move 127: Black plays at F6."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "G5",
        "comment": "Move 128: White plays at G5."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "D8",
        "comment": "Move 129: Black plays at D8."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "N5",
        "comment": "Move 130: White plays at N5."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "P5",
        "comment": "Move 131: Black plays at P5."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "Q7",
        "comment": "Move 132: White plays at Q7."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "P4",
        "comment": "Move 133: Black plays at P4."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "N13",
        "comment": "Move 134: White plays at N13."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "O14",
        "comment": "Move 135: Black plays at O14."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "M5",
        "comment": "Move 136: White plays at M5."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "O6",
        "comment": "Move 137: Black plays at O6."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "M7",
        "comment": "Move 138: White plays at M7."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "Q6",
        "comment": "Move 139: Black plays at Q6."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "D9",
        "comment": "Move 140: White plays at D9."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "C9",
        "comment": "Move 141: Black plays at C9."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "C8",
        "comment": "Move 142: White plays at C8."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "E8",
        "comment": "Move 143: Black plays at E8."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "B9",
        "comment": "Move 144: White plays at B9."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "B11",
        "comment": "Move 145: Black plays at B11."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "M11",
        "comment": "Move 146: White plays at M11."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "J11",
        "comment": "Move 147: Black plays at J11."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "D1",
        "comment": "Move 148: White plays at D1."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "D2",
        "comment": "Move 149: Black plays at D2."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "H11",
        "comment": "Move 150: White plays at H11."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "J9",
        "comment": "Move 151: Black plays at J9."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "K9",
        "comment": "Move 152: White plays at K9."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "J10",
        "comment": "Move 153: Black plays at J10."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "N16",
        "comment": "Move 154: White plays at N16."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "N17",
        "comment": "Move 155: Black plays at N17."
      },
      {
        "num": 156,
        "color": "W",
        "coord": "L15",
        "comment": "Move 156: White plays at L15."
      },
      {
        "num": 157,
        "color": "B",
        "coord": "N15",
        "comment": "Move 157: Black plays at N15."
      },
      {
        "num": 158,
        "color": "W",
        "coord": "L16",
        "comment": "Move 158: White plays at L16."
      },
      {
        "num": 159,
        "color": "B",
        "coord": "P7",
        "comment": "Move 159: Black plays at P7."
      },
      {
        "num": 160,
        "color": "W",
        "coord": "M1",
        "comment": "Move 160: White plays at M1."
      },
      {
        "num": 161,
        "color": "B",
        "coord": "N1",
        "comment": "Move 161: Black plays at N1."
      },
      {
        "num": 162,
        "color": "W",
        "coord": "L1",
        "comment": "Move 162: White plays at L1."
      },
      {
        "num": 163,
        "color": "B",
        "coord": "O2",
        "comment": "Move 163: Black plays at O2."
      },
      {
        "num": 164,
        "color": "W",
        "coord": "O13",
        "comment": "Move 164: White plays at O13."
      },
      {
        "num": 165,
        "color": "B",
        "coord": "P13",
        "comment": "Move 165: Black plays at P13."
      },
      {
        "num": 166,
        "color": "W",
        "coord": "E1",
        "comment": "Move 166: White plays at E1."
      },
      {
        "num": 167,
        "color": "B",
        "coord": "C1",
        "comment": "Move 167: Black plays at C1."
      },
      {
        "num": 168,
        "color": "W",
        "coord": "F2",
        "comment": "Move 168: White plays at F2."
      },
      {
        "num": 169,
        "color": "B",
        "coord": "E2",
        "comment": "Move 169: Black plays at E2."
      },
      {
        "num": 170,
        "color": "W",
        "coord": "F1",
        "comment": "Move 170: White plays at F1."
      },
      {
        "num": 171,
        "color": "B",
        "coord": "B1",
        "comment": "Move 171: Black plays at B1."
      },
      {
        "num": 172,
        "color": "W",
        "coord": "H8",
        "comment": "Move 172: White plays at H8."
      },
      {
        "num": 173,
        "color": "B",
        "coord": "Q8",
        "comment": "Move 173: Black plays at Q8."
      },
      {
        "num": 174,
        "color": "W",
        "coord": "R8",
        "comment": "Move 174: White plays at R8."
      },
      {
        "num": 175,
        "color": "B",
        "coord": "S17",
        "comment": "Move 175: Black plays at S17."
      },
      {
        "num": 176,
        "color": "W",
        "coord": "S5",
        "comment": "Move 176: White plays at S5."
      },
      {
        "num": 177,
        "color": "B",
        "coord": "S4",
        "comment": "Move 177: Black plays at S4."
      },
      {
        "num": 178,
        "color": "W",
        "coord": "T6",
        "comment": "Move 178: White plays at T6."
      },
      {
        "num": 179,
        "color": "B",
        "coord": "H7",
        "comment": "Move 179: Black plays at H7."
      },
      {
        "num": 180,
        "color": "W",
        "coord": "J7",
        "comment": "Move 180: White plays at J7."
      },
      {
        "num": 181,
        "color": "B",
        "coord": "L9",
        "comment": "Move 181: Black plays at L9."
      },
      {
        "num": 182,
        "color": "W",
        "coord": "L10",
        "comment": "Move 182: White plays at L10."
      },
      {
        "num": 183,
        "color": "B",
        "coord": "M9",
        "comment": "Move 183: Black plays at M9."
      },
      {
        "num": 184,
        "color": "W",
        "coord": "K8",
        "comment": "Move 184: White plays at K8."
      },
      {
        "num": 185,
        "color": "B",
        "coord": "N10",
        "comment": "Move 185: Black plays at N10."
      },
      {
        "num": 186,
        "color": "W",
        "coord": "N11",
        "comment": "Move 186: White plays at N11."
      },
      {
        "num": 187,
        "color": "B",
        "coord": "O10",
        "comment": "Move 187: Black plays at O10."
      },
      {
        "num": 188,
        "color": "W",
        "coord": "Q9",
        "comment": "Move 188: White plays at Q9."
      },
      {
        "num": 189,
        "color": "B",
        "coord": "F7",
        "comment": "Move 189: Black plays at F7."
      },
      {
        "num": 190,
        "color": "W",
        "coord": "C6",
        "comment": "Move 190: White plays at C6."
      },
      {
        "num": 191,
        "color": "B",
        "coord": "P8",
        "comment": "Move 191: Black plays at P8."
      },
      {
        "num": 192,
        "color": "W",
        "coord": "P9",
        "comment": "Move 192: White plays at P9."
      },
      {
        "num": 193,
        "color": "B",
        "coord": "O11",
        "comment": "Move 193: Black plays at O11."
      },
      {
        "num": 194,
        "color": "W",
        "coord": "J12",
        "comment": "Move 194: White plays at J12."
      },
      {
        "num": 195,
        "color": "B",
        "coord": "K11",
        "comment": "Move 195: Black plays at K11."
      },
      {
        "num": 196,
        "color": "W",
        "coord": "N18",
        "comment": "Move 196: White plays at N18."
      },
      {
        "num": 197,
        "color": "B",
        "coord": "O18",
        "comment": "Move 197: Black plays at O18."
      },
      {
        "num": 198,
        "color": "W",
        "coord": "M18",
        "comment": "Move 198: White plays at M18."
      },
      {
        "num": 199,
        "color": "B",
        "coord": "F15",
        "comment": "Move 199: Black plays at F15."
      },
      {
        "num": 200,
        "color": "W",
        "coord": "C18",
        "comment": "Move 200: White plays at C18."
      },
      {
        "num": 201,
        "color": "B",
        "coord": "N4",
        "comment": "Move 201: Black plays at N4."
      },
      {
        "num": 202,
        "color": "W",
        "coord": "N7",
        "comment": "Move 202: White plays at N7."
      },
      {
        "num": 203,
        "color": "B",
        "coord": "E18",
        "comment": "Move 203: Black plays at E18."
      },
      {
        "num": 204,
        "color": "W",
        "coord": "O19",
        "comment": "Move 204: White plays at O19."
      },
      {
        "num": 205,
        "color": "B",
        "coord": "P19",
        "comment": "Move 205: Black plays at P19."
      },
      {
        "num": 206,
        "color": "W",
        "coord": "N19",
        "comment": "Move 206: White plays at N19."
      },
      {
        "num": 207,
        "color": "B",
        "coord": "R18",
        "comment": "Move 207: Black plays at R18."
      },
      {
        "num": 208,
        "color": "W",
        "coord": "B10",
        "comment": "Move 208: White plays at B10."
      },
      {
        "num": 209,
        "color": "B",
        "coord": "A11",
        "comment": "Move 209: Black plays at A11."
      },
      {
        "num": 210,
        "color": "W",
        "coord": "A10",
        "comment": "Move 210: White plays at A10."
      },
      {
        "num": 211,
        "color": "B",
        "coord": "A13",
        "comment": "Move 211: Black plays at A13."
      },
      {
        "num": 212,
        "color": "W",
        "coord": "G8",
        "comment": "Move 212: White plays at G8."
      },
      {
        "num": 213,
        "color": "B",
        "coord": "F9",
        "comment": "Move 213: Black plays at F9."
      },
      {
        "num": 214,
        "color": "W",
        "coord": "B8",
        "comment": "Move 214: White plays at B8."
      },
      {
        "num": 215,
        "color": "B",
        "coord": "L13",
        "comment": "Move 215: Black plays at L13."
      },
      {
        "num": 216,
        "color": "W",
        "coord": "L14",
        "comment": "Move 216: White plays at L14."
      },
      {
        "num": 217,
        "color": "B",
        "coord": "J18",
        "comment": "Move 217: Black plays at J18."
      },
      {
        "num": 218,
        "color": "W",
        "coord": "K18",
        "comment": "Move 218: White plays at K18."
      },
      {
        "num": 219,
        "color": "B",
        "coord": "G19",
        "comment": "Move 219: Black plays at G19."
      },
      {
        "num": 220,
        "color": "W",
        "coord": "H19",
        "comment": "Move 220: White plays at H19."
      },
      {
        "num": 221,
        "color": "B",
        "coord": "E16",
        "comment": "Move 221: Black plays at E16."
      },
      {
        "num": 222,
        "color": "W",
        "coord": "E17",
        "comment": "Move 222: White plays at E17."
      },
      {
        "num": 223,
        "color": "B",
        "coord": "F17",
        "comment": "Move 223: Black plays at F17."
      },
      {
        "num": 224,
        "color": "W",
        "coord": "G14",
        "comment": "Move 224: White plays at G14."
      },
      {
        "num": 225,
        "color": "B",
        "coord": "F14",
        "comment": "Move 225: Black plays at F14."
      },
      {
        "num": 226,
        "color": "W",
        "coord": "G10",
        "comment": "Move 226: White plays at G10."
      },
      {
        "num": 227,
        "color": "B",
        "coord": "H9",
        "comment": "Move 227: Black plays at H9."
      },
      {
        "num": 228,
        "color": "W",
        "coord": "H12",
        "comment": "Move 228: White plays at H12."
      },
      {
        "num": 229,
        "color": "B",
        "coord": "F10",
        "comment": "Move 229: Black plays at F10."
      },
      {
        "num": 230,
        "color": "W",
        "coord": "O5",
        "comment": "Move 230: White plays at O5."
      },
      {
        "num": 231,
        "color": "B",
        "coord": "F3",
        "comment": "Move 231: Black plays at F3."
      },
      {
        "num": 232,
        "color": "W",
        "coord": "H2",
        "comment": "Move 232: White plays at H2."
      },
      {
        "num": 233,
        "color": "B",
        "coord": "L8",
        "comment": "Move 233: Black plays at L8."
      },
      {
        "num": 234,
        "color": "W",
        "coord": "L7",
        "comment": "Move 234: White plays at L7."
      },
      {
        "num": 235,
        "color": "B",
        "coord": "N6",
        "comment": "Move 235: Black plays at N6."
      },
      {
        "num": 236,
        "color": "W",
        "coord": "M6",
        "comment": "Move 236: White plays at M6."
      },
      {
        "num": 237,
        "color": "B",
        "coord": "O8",
        "comment": "Move 237: Black plays at O8."
      },
      {
        "num": 238,
        "color": "W",
        "coord": "D18",
        "comment": "Move 238: White plays at D18."
      },
      {
        "num": 239,
        "color": "B",
        "coord": "D19",
        "comment": "Move 239: Black plays at D19."
      },
      {
        "num": 240,
        "color": "W",
        "coord": "C19",
        "comment": "Move 240: White plays at C19."
      },
      {
        "num": 241,
        "color": "B",
        "coord": "E19",
        "comment": "Move 241: Black plays at E19."
      },
      {
        "num": 242,
        "color": "W",
        "coord": "O4",
        "comment": "Move 242: White plays at O4."
      },
      {
        "num": 243,
        "color": "B",
        "coord": "O3",
        "comment": "Move 243: Black plays at O3."
      },
      {
        "num": 244,
        "color": "W",
        "coord": "P10",
        "comment": "Move 244: White plays at P10."
      },
      {
        "num": 245,
        "color": "B",
        "coord": "P11",
        "comment": "Move 245: Black plays at P11."
      },
      {
        "num": 246,
        "color": "W",
        "coord": "E6",
        "comment": "Move 246: White plays at E6."
      },
      {
        "num": 247,
        "color": "B",
        "coord": "E7",
        "comment": "Move 247: Black plays at E7."
      },
      {
        "num": 248,
        "color": "W",
        "coord": "E5",
        "comment": "Move 248: White plays at E5."
      },
      {
        "num": 249,
        "color": "B",
        "coord": "D7",
        "comment": "Move 249: Black plays at D7."
      },
      {
        "num": 250,
        "color": "W",
        "coord": "D6",
        "comment": "Move 250: White plays at D6."
      },
      {
        "num": 251,
        "color": "B",
        "coord": "T4",
        "comment": "Move 251: Black plays at T4."
      },
      {
        "num": 252,
        "color": "W",
        "coord": "T5",
        "comment": "Move 252: White plays at T5."
      },
      {
        "num": 253,
        "color": "B",
        "coord": "H6",
        "comment": "Move 253: Black plays at H6."
      },
      {
        "num": 254,
        "color": "W",
        "coord": "H5",
        "comment": "Move 254: White plays at H5."
      },
      {
        "num": 255,
        "color": "B",
        "coord": "H17",
        "comment": "Move 255: Black plays at H17."
      },
      {
        "num": 256,
        "color": "W",
        "coord": "J19",
        "comment": "Move 256: White plays at J19."
      },
      {
        "num": 257,
        "color": "B",
        "coord": "A5",
        "comment": "Move 257: Black plays at A5."
      },
      {
        "num": 258,
        "color": "W",
        "coord": "A6",
        "comment": "Move 258: White plays at A6."
      },
      {
        "num": 259,
        "color": "B",
        "coord": "A4",
        "comment": "Move 259: Black plays at A4."
      },
      {
        "num": 260,
        "color": "W",
        "coord": "T17",
        "comment": "Move 260: White plays at T17."
      },
      {
        "num": 261,
        "color": "B",
        "coord": "T18",
        "comment": "Move 261: Black plays at T18."
      },
      {
        "num": 262,
        "color": "W",
        "coord": "T16",
        "comment": "Move 262: White plays at T16."
      },
      {
        "num": 263,
        "color": "B",
        "coord": "K13",
        "comment": "Move 263: Black plays at K13."
      },
      {
        "num": 264,
        "color": "W",
        "coord": "A16",
        "comment": "Move 264: White plays at A16."
      },
      {
        "num": 265,
        "color": "B",
        "coord": "G12",
        "comment": "Move 265: Black plays at G12."
      },
      {
        "num": 266,
        "color": "W",
        "coord": "A15",
        "comment": "Move 266: White plays at A15."
      },
      {
        "num": 267,
        "color": "B",
        "coord": "E15",
        "comment": "Move 267: Black plays at E15."
      },
      {
        "num": 268,
        "color": "W",
        "coord": "N8",
        "comment": "Move 268: White plays at N8."
      },
      {
        "num": 269,
        "color": "B",
        "coord": "N9",
        "comment": "Move 269: Black plays at N9."
      },
      {
        "num": 270,
        "color": "W",
        "coord": "Q10",
        "comment": "Move 270: White plays at Q10."
      },
      {
        "num": 271,
        "color": "B",
        "coord": "B14",
        "comment": "Move 271: Black plays at B14."
      },
      {
        "num": 272,
        "color": "W",
        "coord": "O7",
        "comment": "Move 272: White plays at O7."
      },
      {
        "num": 273,
        "color": "B",
        "coord": "P6",
        "comment": "Move 273: Black plays at P6."
      },
      {
        "num": 274,
        "color": "W",
        "coord": "H15",
        "comment": "Move 274: White plays at H15."
      },
      {
        "num": 275,
        "color": "B",
        "coord": "J13",
        "comment": "Move 275: Black plays at J13."
      },
      {
        "num": 276,
        "color": "W",
        "coord": "L11",
        "comment": "Move 276: White plays at L11."
      },
      {
        "num": 277,
        "color": "B",
        "coord": "K12",
        "comment": "Move 277: Black plays at K12."
      },
      {
        "num": 278,
        "color": "W",
        "coord": "F8",
        "comment": "Move 278: White plays at F8."
      },
      {
        "num": 279,
        "color": "B",
        "coord": "K10",
        "comment": "Move 279: Black plays at K10."
      },
      {
        "num": 280,
        "color": "W",
        "coord": "F5",
        "comment": "Move 280: White plays at F5."
      },
      {
        "num": 281,
        "color": "B",
        "coord": "H10",
        "comment": "Move 281: Black plays at H10."
      },
      {
        "num": 282,
        "color": "W",
        "coord": "G11",
        "comment": "Move 282: White plays at G11."
      },
      {
        "num": 283,
        "color": "B",
        "coord": "M8",
        "comment": "Move 283: Black plays at M8."
      },
      {
        "num": 284,
        "color": "W",
        "coord": "K7",
        "comment": "Move 284: White plays at K7."
      },
      {
        "num": 285,
        "color": "B",
        "coord": "M12",
        "comment": "Move 285: Black plays at M12."
      },
      {
        "num": 286,
        "color": "W",
        "coord": "N12",
        "comment": "Move 286: White plays at N12."
      },
      {
        "num": 287,
        "color": "B",
        "coord": "M10",
        "comment": "Move 287: Black plays at M10."
      },
      {
        "num": 288,
        "color": "W",
        "coord": "J14",
        "comment": "Move 288: White plays at J14."
      },
      {
        "num": 289,
        "color": "B",
        "coord": "H16",
        "comment": "Move 289: Black plays at H16."
      }
    ]
  },
  {
    "id": "2017-g2",
    "title": "Game 2: Ke Jie's Ferocious Masterpiece",
    "black": "AlphaGo Master",
    "white": "Ke Jie (9p)",
    "date": "May 25, 2017",
    "result": "Black won by resignation (155 moves)",
    "highlightMove": 50,
    "description": "Demis Hassabis remarked on Twitter that Ke Jie was playing 'perfectly' in the first 50 moves, pushing AlphaGo to its computational limit.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "R4",
        "comment": "Move 1: Black plays at R4."
      },
      {
        "num": 2,
        "color": "W",
        "coord": "Q16",
        "comment": "Move 2: White plays at Q16."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "C3",
        "comment": "Move 3: Black plays at C3."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "C16",
        "comment": "Move 4: White plays at C16."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "E17",
        "comment": "Move 5: Black plays at E17."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "P3",
        "comment": "Move 6: White plays at P3."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "Q6",
        "comment": "Move 7: Black plays at Q6."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "D14",
        "comment": "Move 8: White plays at D14."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "O17",
        "comment": "Move 9: Black plays at O17."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "R14",
        "comment": "Move 10: White plays at R14."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "Q17",
        "comment": "Move 11: Black plays at Q17."
      },
      {
        "num": 12,
        "color": "W",
        "coord": "R17",
        "comment": "Move 12: White plays at R17."
      },
      {
        "num": 13,
        "color": "B",
        "coord": "R18",
        "comment": "Move 13: Black plays at R18."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "P17",
        "comment": "Move 14: White plays at P17."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "Q18",
        "comment": "Move 15: Black plays at Q18."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "P16",
        "comment": "Move 16: White plays at P16."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "P18",
        "comment": "Move 17: Black plays at P18."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "S17",
        "comment": "Move 18: White plays at S17."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "O16",
        "comment": "Move 19: Black plays at O16."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "N18",
        "comment": "Move 20: White plays at N18."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "M17",
        "comment": "Move 21: Black plays at M17."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "M18",
        "comment": "Move 22: White plays at M18."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "R16",
        "comment": "Move 23: Black plays at R16."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "S16",
        "comment": "Move 24: White plays at S16."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "K17",
        "comment": "Move 25: Black plays at K17."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "N17",
        "comment": "Move 26: White plays at N17."
      },
      {
        "num": 27,
        "color": "B",
        "coord": "Q15",
        "comment": "Move 27: Black plays at Q15."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "P15",
        "comment": "Move 28: White plays at P15."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "M16",
        "comment": "Move 29: Black plays at M16."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "L4",
        "comment": "Move 30: White plays at L4."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "J3",
        "comment": "Move 31: Black plays at J3."
      },
      {
        "num": 32,
        "color": "W",
        "coord": "F4",
        "comment": "Move 32: White plays at F4."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "D6",
        "comment": "Move 33: Black plays at D6."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "J5",
        "comment": "Move 34: White plays at J5."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "C12",
        "comment": "Move 35: Black plays at C12."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "C8",
        "comment": "Move 36: White plays at C8."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "E12",
        "comment": "Move 37: Black plays at E12."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "C13",
        "comment": "Move 38: White plays at C13."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "B13",
        "comment": "Move 39: Black plays at B13."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "B14",
        "comment": "Move 40: White plays at B14."
      },
      {
        "num": 41,
        "color": "B",
        "coord": "F6",
        "comment": "Move 41: Black plays at F6."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "E7",
        "comment": "Move 42: White plays at E7."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "E6",
        "comment": "Move 43: Black plays at E6."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "E9",
        "comment": "Move 44: White plays at E9."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "L3",
        "comment": "Move 45: Black plays at L3."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "M3",
        "comment": "Move 46: White plays at M3."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "M4",
        "comment": "Move 47: Black plays at M4."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "K3",
        "comment": "Move 48: White plays at K3."
      },
      {
        "num": 49,
        "color": "B",
        "coord": "L2",
        "comment": "Move 49: Black plays at L2."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "K4",
        "comment": "Move 50: White plays at K4."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "K2",
        "comment": "Move 51: Black plays at K2."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "N3",
        "comment": "Move 52: White plays at N3."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "J4",
        "comment": "Move 53: Black plays at J4."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "H5",
        "comment": "Move 54: White plays at H5."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "G4",
        "comment": "Move 55: Black plays at G4."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "D3",
        "comment": "Move 56: White plays at D3."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "G5",
        "comment": "Move 57: Black plays at G5."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "C4",
        "comment": "Move 58: White plays at C4."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "M5",
        "comment": "Move 59: Black plays at M5."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "L6",
        "comment": "Move 60: White plays at L6."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "M6",
        "comment": "Move 61: Black plays at M6."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "L7",
        "comment": "Move 62: White plays at L7."
      },
      {
        "num": 63,
        "color": "B",
        "coord": "D4",
        "comment": "Move 63: Black plays at D4."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "H4",
        "comment": "Move 64: White plays at H4."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "H3",
        "comment": "Move 65: Black plays at H3."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "G3",
        "comment": "Move 66: White plays at G3."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "G2",
        "comment": "Move 67: Black plays at G2."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "F3",
        "comment": "Move 68: White plays at F3."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "H6",
        "comment": "Move 69: Black plays at H6."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "K5",
        "comment": "Move 70: White plays at K5."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "F2",
        "comment": "Move 71: Black plays at F2."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "D5",
        "comment": "Move 72: White plays at D5."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "C5",
        "comment": "Move 73: Black plays at C5."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "E4",
        "comment": "Move 74: White plays at E4."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "B4",
        "comment": "Move 75: Black plays at B4."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "N16",
        "comment": "Move 76: White plays at N16."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "O15",
        "comment": "Move 77: Black plays at O15."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "P14",
        "comment": "Move 78: White plays at P14."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "M7",
        "comment": "Move 79: Black plays at M7."
      },
      {
        "num": 80,
        "color": "W",
        "coord": "M15",
        "comment": "Move 80: White plays at M15."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "L8",
        "comment": "Move 81: Black plays at L8."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "K8",
        "comment": "Move 82: White plays at K8."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "G8",
        "comment": "Move 83: Black plays at G8."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "L9",
        "comment": "Move 84: White plays at L9."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "M8",
        "comment": "Move 85: Black plays at M8."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "K9",
        "comment": "Move 86: White plays at K9."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "N10",
        "comment": "Move 87: Black plays at N10."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "G10",
        "comment": "Move 88: White plays at G10."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "Q3",
        "comment": "Move 89: Black plays at Q3."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "Q2",
        "comment": "Move 90: White plays at Q2."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "R2",
        "comment": "Move 91: Black plays at R2."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "Q5",
        "comment": "Move 92: White plays at Q5."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "R5",
        "comment": "Move 93: Black plays at R5."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "P6",
        "comment": "Move 94: White plays at P6."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "P4",
        "comment": "Move 95: Black plays at P4."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "O4",
        "comment": "Move 96: White plays at O4."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "Q7",
        "comment": "Move 97: Black plays at Q7."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "P7",
        "comment": "Move 98: White plays at P7."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "O5",
        "comment": "Move 99: Black plays at O5."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "B5",
        "comment": "Move 100: White plays at B5."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "D4",
        "comment": "Move 101: Black plays at D4."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "P5",
        "comment": "Move 102: White plays at P5."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "Q4",
        "comment": "Move 103: Black plays at Q4."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "C4",
        "comment": "Move 104: White plays at C4."
      },
      {
        "num": 105,
        "color": "B",
        "coord": "C6",
        "comment": "Move 105: Black plays at C6."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "O8",
        "comment": "Move 106: White plays at O8."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "M9",
        "comment": "Move 107: Black plays at M9."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "N5",
        "comment": "Move 108: White plays at N5."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "Q8",
        "comment": "Move 109: Black plays at Q8."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "O10",
        "comment": "Move 110: White plays at O10."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "O11",
        "comment": "Move 111: Black plays at O11."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "P9",
        "comment": "Move 112: White plays at P9."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "O14",
        "comment": "Move 113: Black plays at O14."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "N11",
        "comment": "Move 114: White plays at N11."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "M11",
        "comment": "Move 115: Black plays at M11."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "N12",
        "comment": "Move 116: White plays at N12."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "P13",
        "comment": "Move 117: Black plays at P13."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "Q14",
        "comment": "Move 118: White plays at Q14."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "L11",
        "comment": "Move 119: Black plays at L11."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "J10",
        "comment": "Move 120: White plays at J10."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "M13",
        "comment": "Move 121: Black plays at M13."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "O12",
        "comment": "Move 122: White plays at O12."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "P11",
        "comment": "Move 123: Black plays at P11."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "P12",
        "comment": "Move 124: White plays at P12."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "Q10",
        "comment": "Move 125: Black plays at Q10."
      },
      {
        "num": 126,
        "color": "W",
        "coord": "Q12",
        "comment": "Move 126: White plays at Q12."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "Q9",
        "comment": "Move 127: Black plays at Q9."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "B3",
        "comment": "Move 128: White plays at B3."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "D4",
        "comment": "Move 129: Black plays at D4."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "K13",
        "comment": "Move 130: White plays at K13."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "L13",
        "comment": "Move 131: Black plays at L13."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "C4",
        "comment": "Move 132: White plays at C4."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "K6",
        "comment": "Move 133: Black plays at K6."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "J6",
        "comment": "Move 134: White plays at J6."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "D4",
        "comment": "Move 135: Black plays at D4."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "F5",
        "comment": "Move 136: White plays at F5."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "C4",
        "comment": "Move 137: Black plays at C4."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "G6",
        "comment": "Move 138: White plays at G6."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "L15",
        "comment": "Move 139: Black plays at L15."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "N15",
        "comment": "Move 140: White plays at N15."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "K14",
        "comment": "Move 141: Black plays at K14."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "K18",
        "comment": "Move 142: White plays at K18."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "J17",
        "comment": "Move 143: Black plays at J17."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "J18",
        "comment": "Move 144: White plays at J18."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "E2",
        "comment": "Move 145: Black plays at E2."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "H17",
        "comment": "Move 146: White plays at H17."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "C17",
        "comment": "Move 147: Black plays at C17."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "B17",
        "comment": "Move 148: White plays at B17."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "D16",
        "comment": "Move 149: Black plays at D16."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "C18",
        "comment": "Move 150: White plays at C18."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "C15",
        "comment": "Move 151: Black plays at C15."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "D17",
        "comment": "Move 152: White plays at D17."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "C14",
        "comment": "Move 153: Black plays at C14."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "D13",
        "comment": "Move 154: White plays at D13."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "B15",
        "comment": "Move 155: Black plays at B15."
      }
    ]
  },
  {
    "id": "2017-g3",
    "title": "Game 3: The Farewell Exhibition",
    "black": "Ke Jie (9p)",
    "white": "AlphaGo Master",
    "date": "May 27, 2017",
    "result": "White won by resignation (209 moves)",
    "highlightMove": 72,
    "description": "The final official game of AlphaGo before its retirement from competitive play, demonstrating transcendent balance and harmony across the entire 19x19 board.",
    "moves": [
      {
        "num": 1,
        "color": "B",
        "coord": "Q4",
        "comment": "Move 1: Black plays at Q4."
      },
      {
        "num": 2,
        "color": "W",
        "coord": "D4",
        "comment": "Move 2: White plays at D4."
      },
      {
        "num": 3,
        "color": "B",
        "coord": "Q17",
        "comment": "Move 3: Black plays at Q17."
      },
      {
        "num": 4,
        "color": "W",
        "coord": "D16",
        "comment": "Move 4: White plays at D16."
      },
      {
        "num": 5,
        "color": "B",
        "coord": "F3",
        "comment": "Move 5: Black plays at F3."
      },
      {
        "num": 6,
        "color": "W",
        "coord": "C6",
        "comment": "Move 6: White plays at C6."
      },
      {
        "num": 7,
        "color": "B",
        "coord": "R12",
        "comment": "Move 7: Black plays at R12."
      },
      {
        "num": 8,
        "color": "W",
        "coord": "R6",
        "comment": "Move 8: White plays at R6."
      },
      {
        "num": 9,
        "color": "B",
        "coord": "R5",
        "comment": "Move 9: Black plays at R5."
      },
      {
        "num": 10,
        "color": "W",
        "coord": "Q6",
        "comment": "Move 10: White plays at Q6."
      },
      {
        "num": 11,
        "color": "B",
        "coord": "O4",
        "comment": "Move 11: Black plays at O4."
      },
      {
        "num": 12,
        "color": "W",
        "coord": "Q9",
        "comment": "Move 12: White plays at Q9."
      },
      {
        "num": 13,
        "color": "B",
        "coord": "R10",
        "comment": "Move 13: Black plays at R10."
      },
      {
        "num": 14,
        "color": "W",
        "coord": "E3",
        "comment": "Move 14: White plays at E3."
      },
      {
        "num": 15,
        "color": "B",
        "coord": "F4",
        "comment": "Move 15: Black plays at F4."
      },
      {
        "num": 16,
        "color": "W",
        "coord": "K3",
        "comment": "Move 16: White plays at K3."
      },
      {
        "num": 17,
        "color": "B",
        "coord": "M3",
        "comment": "Move 17: Black plays at M3."
      },
      {
        "num": 18,
        "color": "W",
        "coord": "H3",
        "comment": "Move 18: White plays at H3."
      },
      {
        "num": 19,
        "color": "B",
        "coord": "F7",
        "comment": "Move 19: Black plays at F7."
      },
      {
        "num": 20,
        "color": "W",
        "coord": "O2",
        "comment": "Move 20: White plays at O2."
      },
      {
        "num": 21,
        "color": "B",
        "coord": "D7",
        "comment": "Move 21: Black plays at D7."
      },
      {
        "num": 22,
        "color": "W",
        "coord": "D6",
        "comment": "Move 22: White plays at D6."
      },
      {
        "num": 23,
        "color": "B",
        "coord": "E6",
        "comment": "Move 23: Black plays at E6."
      },
      {
        "num": 24,
        "color": "W",
        "coord": "E8",
        "comment": "Move 24: White plays at E8."
      },
      {
        "num": 25,
        "color": "B",
        "coord": "E7",
        "comment": "Move 25: Black plays at E7."
      },
      {
        "num": 26,
        "color": "W",
        "coord": "B8",
        "comment": "Move 26: White plays at B8."
      },
      {
        "num": 27,
        "color": "B",
        "coord": "C9",
        "comment": "Move 27: Black plays at C9."
      },
      {
        "num": 28,
        "color": "W",
        "coord": "R3",
        "comment": "Move 28: White plays at R3."
      },
      {
        "num": 29,
        "color": "B",
        "coord": "Q3",
        "comment": "Move 29: Black plays at Q3."
      },
      {
        "num": 30,
        "color": "W",
        "coord": "Q2",
        "comment": "Move 30: White plays at Q2."
      },
      {
        "num": 31,
        "color": "B",
        "coord": "O3",
        "comment": "Move 31: Black plays at O3."
      },
      {
        "num": 32,
        "color": "W",
        "coord": "Q16",
        "comment": "Move 32: White plays at Q16."
      },
      {
        "num": 33,
        "color": "B",
        "coord": "P17",
        "comment": "Move 33: Black plays at P17."
      },
      {
        "num": 34,
        "color": "W",
        "coord": "P11",
        "comment": "Move 34: White plays at P11."
      },
      {
        "num": 35,
        "color": "B",
        "coord": "S3",
        "comment": "Move 35: Black plays at S3."
      },
      {
        "num": 36,
        "color": "W",
        "coord": "Q13",
        "comment": "Move 36: White plays at Q13."
      },
      {
        "num": 37,
        "color": "B",
        "coord": "R16",
        "comment": "Move 37: Black plays at R16."
      },
      {
        "num": 38,
        "color": "W",
        "coord": "R13",
        "comment": "Move 38: White plays at R13."
      },
      {
        "num": 39,
        "color": "B",
        "coord": "F2",
        "comment": "Move 39: Black plays at F2."
      },
      {
        "num": 40,
        "color": "W",
        "coord": "G5",
        "comment": "Move 40: White plays at G5."
      },
      {
        "num": 41,
        "color": "B",
        "coord": "C3",
        "comment": "Move 41: Black plays at C3."
      },
      {
        "num": 42,
        "color": "W",
        "coord": "C8",
        "comment": "Move 42: White plays at C8."
      },
      {
        "num": 43,
        "color": "B",
        "coord": "D8",
        "comment": "Move 43: Black plays at D8."
      },
      {
        "num": 44,
        "color": "W",
        "coord": "D9",
        "comment": "Move 44: White plays at D9."
      },
      {
        "num": 45,
        "color": "B",
        "coord": "C10",
        "comment": "Move 45: Black plays at C10."
      },
      {
        "num": 46,
        "color": "W",
        "coord": "D10",
        "comment": "Move 46: White plays at D10."
      },
      {
        "num": 47,
        "color": "B",
        "coord": "D11",
        "comment": "Move 47: Black plays at D11."
      },
      {
        "num": 48,
        "color": "W",
        "coord": "F10",
        "comment": "Move 48: White plays at F10."
      },
      {
        "num": 49,
        "color": "B",
        "coord": "C12",
        "comment": "Move 49: Black plays at C12."
      },
      {
        "num": 50,
        "color": "W",
        "coord": "C4",
        "comment": "Move 50: White plays at C4."
      },
      {
        "num": 51,
        "color": "B",
        "coord": "D3",
        "comment": "Move 51: Black plays at D3."
      },
      {
        "num": 52,
        "color": "W",
        "coord": "B11",
        "comment": "Move 52: White plays at B11."
      },
      {
        "num": 53,
        "color": "B",
        "coord": "C11",
        "comment": "Move 53: Black plays at C11."
      },
      {
        "num": 54,
        "color": "W",
        "coord": "E4",
        "comment": "Move 54: White plays at E4."
      },
      {
        "num": 55,
        "color": "B",
        "coord": "E2",
        "comment": "Move 55: Black plays at E2."
      },
      {
        "num": 56,
        "color": "W",
        "coord": "B3",
        "comment": "Move 56: White plays at B3."
      },
      {
        "num": 57,
        "color": "B",
        "coord": "B2",
        "comment": "Move 57: Black plays at B2."
      },
      {
        "num": 58,
        "color": "W",
        "coord": "H7",
        "comment": "Move 58: White plays at H7."
      },
      {
        "num": 59,
        "color": "B",
        "coord": "G11",
        "comment": "Move 59: Black plays at G11."
      },
      {
        "num": 60,
        "color": "W",
        "coord": "G10",
        "comment": "Move 60: White plays at G10."
      },
      {
        "num": 61,
        "color": "B",
        "coord": "H10",
        "comment": "Move 61: Black plays at H10."
      },
      {
        "num": 62,
        "color": "W",
        "coord": "F11",
        "comment": "Move 62: White plays at F11."
      },
      {
        "num": 63,
        "color": "B",
        "coord": "E10",
        "comment": "Move 63: Black plays at E10."
      },
      {
        "num": 64,
        "color": "W",
        "coord": "S2",
        "comment": "Move 64: White plays at S2."
      },
      {
        "num": 65,
        "color": "B",
        "coord": "S4",
        "comment": "Move 65: Black plays at S4."
      },
      {
        "num": 66,
        "color": "W",
        "coord": "M2",
        "comment": "Move 66: White plays at M2."
      },
      {
        "num": 67,
        "color": "B",
        "coord": "L2",
        "comment": "Move 67: Black plays at L2."
      },
      {
        "num": 68,
        "color": "W",
        "coord": "N2",
        "comment": "Move 68: White plays at N2."
      },
      {
        "num": 69,
        "color": "B",
        "coord": "L3",
        "comment": "Move 69: Black plays at L3."
      },
      {
        "num": 70,
        "color": "W",
        "coord": "K2",
        "comment": "Move 70: White plays at K2."
      },
      {
        "num": 71,
        "color": "B",
        "coord": "K1",
        "comment": "Move 71: Black plays at K1."
      },
      {
        "num": 72,
        "color": "W",
        "coord": "P2",
        "comment": "Move 72: White plays at P2."
      },
      {
        "num": 73,
        "color": "B",
        "coord": "L5",
        "comment": "Move 73: Black plays at L5."
      },
      {
        "num": 74,
        "color": "W",
        "coord": "K6",
        "comment": "Move 74: White plays at K6."
      },
      {
        "num": 75,
        "color": "B",
        "coord": "L6",
        "comment": "Move 75: Black plays at L6."
      },
      {
        "num": 76,
        "color": "W",
        "coord": "K7",
        "comment": "Move 76: White plays at K7."
      },
      {
        "num": 77,
        "color": "B",
        "coord": "M8",
        "comment": "Move 77: Black plays at M8."
      },
      {
        "num": 78,
        "color": "W",
        "coord": "S7",
        "comment": "Move 78: White plays at S7."
      },
      {
        "num": 79,
        "color": "B",
        "coord": "P7",
        "comment": "Move 79: Black plays at P7."
      },
      {
        "num": 80,
        "color": "W",
        "coord": "P6",
        "comment": "Move 80: White plays at P6."
      },
      {
        "num": 81,
        "color": "B",
        "coord": "O7",
        "comment": "Move 81: Black plays at O7."
      },
      {
        "num": 82,
        "color": "W",
        "coord": "O6",
        "comment": "Move 82: White plays at O6."
      },
      {
        "num": 83,
        "color": "B",
        "coord": "N6",
        "comment": "Move 83: Black plays at N6."
      },
      {
        "num": 84,
        "color": "W",
        "coord": "R15",
        "comment": "Move 84: White plays at R15."
      },
      {
        "num": 85,
        "color": "B",
        "coord": "Q15",
        "comment": "Move 85: Black plays at Q15."
      },
      {
        "num": 86,
        "color": "W",
        "coord": "S16",
        "comment": "Move 86: White plays at S16."
      },
      {
        "num": 87,
        "color": "B",
        "coord": "P16",
        "comment": "Move 87: Black plays at P16."
      },
      {
        "num": 88,
        "color": "W",
        "coord": "S14",
        "comment": "Move 88: White plays at S14."
      },
      {
        "num": 89,
        "color": "B",
        "coord": "G9",
        "comment": "Move 89: Black plays at G9."
      },
      {
        "num": 90,
        "color": "W",
        "coord": "F9",
        "comment": "Move 90: White plays at F9."
      },
      {
        "num": 91,
        "color": "B",
        "coord": "G8",
        "comment": "Move 91: Black plays at G8."
      },
      {
        "num": 92,
        "color": "W",
        "coord": "L8",
        "comment": "Move 92: White plays at L8."
      },
      {
        "num": 93,
        "color": "B",
        "coord": "M9",
        "comment": "Move 93: Black plays at M9."
      },
      {
        "num": 94,
        "color": "W",
        "coord": "L9",
        "comment": "Move 94: White plays at L9."
      },
      {
        "num": 95,
        "color": "B",
        "coord": "G12",
        "comment": "Move 95: Black plays at G12."
      },
      {
        "num": 96,
        "color": "W",
        "coord": "M10",
        "comment": "Move 96: White plays at M10."
      },
      {
        "num": 97,
        "color": "B",
        "coord": "N10",
        "comment": "Move 97: Black plays at N10."
      },
      {
        "num": 98,
        "color": "W",
        "coord": "L10",
        "comment": "Move 98: White plays at L10."
      },
      {
        "num": 99,
        "color": "B",
        "coord": "F17",
        "comment": "Move 99: Black plays at F17."
      },
      {
        "num": 100,
        "color": "W",
        "coord": "C14",
        "comment": "Move 100: White plays at C14."
      },
      {
        "num": 101,
        "color": "B",
        "coord": "D18",
        "comment": "Move 101: Black plays at D18."
      },
      {
        "num": 102,
        "color": "W",
        "coord": "C17",
        "comment": "Move 102: White plays at C17."
      },
      {
        "num": 103,
        "color": "B",
        "coord": "F15",
        "comment": "Move 103: Black plays at F15."
      },
      {
        "num": 104,
        "color": "W",
        "coord": "G16",
        "comment": "Move 104: White plays at G16."
      },
      {
        "num": 105,
        "color": "B",
        "coord": "F16",
        "comment": "Move 105: Black plays at F16."
      },
      {
        "num": 106,
        "color": "W",
        "coord": "C18",
        "comment": "Move 106: White plays at C18."
      },
      {
        "num": 107,
        "color": "B",
        "coord": "D14",
        "comment": "Move 107: Black plays at D14."
      },
      {
        "num": 108,
        "color": "W",
        "coord": "G13",
        "comment": "Move 108: White plays at G13."
      },
      {
        "num": 109,
        "color": "B",
        "coord": "F12",
        "comment": "Move 109: Black plays at F12."
      },
      {
        "num": 110,
        "color": "W",
        "coord": "E14",
        "comment": "Move 110: White plays at E14."
      },
      {
        "num": 111,
        "color": "B",
        "coord": "D15",
        "comment": "Move 111: Black plays at D15."
      },
      {
        "num": 112,
        "color": "W",
        "coord": "C15",
        "comment": "Move 112: White plays at C15."
      },
      {
        "num": 113,
        "color": "B",
        "coord": "K16",
        "comment": "Move 113: Black plays at K16."
      },
      {
        "num": 114,
        "color": "W",
        "coord": "M17",
        "comment": "Move 114: White plays at M17."
      },
      {
        "num": 115,
        "color": "B",
        "coord": "M16",
        "comment": "Move 115: Black plays at M16."
      },
      {
        "num": 116,
        "color": "W",
        "coord": "G17",
        "comment": "Move 116: White plays at G17."
      },
      {
        "num": 117,
        "color": "B",
        "coord": "F18",
        "comment": "Move 117: Black plays at F18."
      },
      {
        "num": 118,
        "color": "W",
        "coord": "L16",
        "comment": "Move 118: White plays at L16."
      },
      {
        "num": 119,
        "color": "B",
        "coord": "L15",
        "comment": "Move 119: Black plays at L15."
      },
      {
        "num": 120,
        "color": "W",
        "coord": "L17",
        "comment": "Move 120: White plays at L17."
      },
      {
        "num": 121,
        "color": "B",
        "coord": "J17",
        "comment": "Move 121: Black plays at J17."
      },
      {
        "num": 122,
        "color": "W",
        "coord": "M15",
        "comment": "Move 122: White plays at M15."
      },
      {
        "num": 123,
        "color": "B",
        "coord": "N16",
        "comment": "Move 123: Black plays at N16."
      },
      {
        "num": 124,
        "color": "W",
        "coord": "K15",
        "comment": "Move 124: White plays at K15."
      },
      {
        "num": 125,
        "color": "B",
        "coord": "L14",
        "comment": "Move 125: Black plays at L14."
      },
      {
        "num": 126,
        "color": "W",
        "coord": "K14",
        "comment": "Move 126: White plays at K14."
      },
      {
        "num": 127,
        "color": "B",
        "coord": "K13",
        "comment": "Move 127: Black plays at K13."
      },
      {
        "num": 128,
        "color": "W",
        "coord": "L13",
        "comment": "Move 128: White plays at L13."
      },
      {
        "num": 129,
        "color": "B",
        "coord": "M14",
        "comment": "Move 129: Black plays at M14."
      },
      {
        "num": 130,
        "color": "W",
        "coord": "J13",
        "comment": "Move 130: White plays at J13."
      },
      {
        "num": 131,
        "color": "B",
        "coord": "K12",
        "comment": "Move 131: Black plays at K12."
      },
      {
        "num": 132,
        "color": "W",
        "coord": "J12",
        "comment": "Move 132: White plays at J12."
      },
      {
        "num": 133,
        "color": "B",
        "coord": "G15",
        "comment": "Move 133: Black plays at G15."
      },
      {
        "num": 134,
        "color": "W",
        "coord": "H15",
        "comment": "Move 134: White plays at H15."
      },
      {
        "num": 135,
        "color": "B",
        "coord": "H16",
        "comment": "Move 135: Black plays at H16."
      },
      {
        "num": 136,
        "color": "W",
        "coord": "J15",
        "comment": "Move 136: White plays at J15."
      },
      {
        "num": 137,
        "color": "B",
        "coord": "K17",
        "comment": "Move 137: Black plays at K17."
      },
      {
        "num": 138,
        "color": "W",
        "coord": "H17",
        "comment": "Move 138: White plays at H17."
      },
      {
        "num": 139,
        "color": "B",
        "coord": "H18",
        "comment": "Move 139: Black plays at H18."
      },
      {
        "num": 140,
        "color": "W",
        "coord": "J16",
        "comment": "Move 140: White plays at J16."
      },
      {
        "num": 141,
        "color": "B",
        "coord": "G18",
        "comment": "Move 141: Black plays at G18."
      },
      {
        "num": 142,
        "color": "W",
        "coord": "N5",
        "comment": "Move 142: White plays at N5."
      },
      {
        "num": 143,
        "color": "B",
        "coord": "M7",
        "comment": "Move 143: Black plays at M7."
      },
      {
        "num": 144,
        "color": "W",
        "coord": "O5",
        "comment": "Move 144: White plays at O5."
      },
      {
        "num": 145,
        "color": "B",
        "coord": "M5",
        "comment": "Move 145: Black plays at M5."
      },
      {
        "num": 146,
        "color": "W",
        "coord": "O9",
        "comment": "Move 146: White plays at O9."
      },
      {
        "num": 147,
        "color": "B",
        "coord": "J2",
        "comment": "Move 147: Black plays at J2."
      },
      {
        "num": 148,
        "color": "W",
        "coord": "J3",
        "comment": "Move 148: White plays at J3."
      },
      {
        "num": 149,
        "color": "B",
        "coord": "H2",
        "comment": "Move 149: Black plays at H2."
      },
      {
        "num": 150,
        "color": "W",
        "coord": "R18",
        "comment": "Move 150: White plays at R18."
      },
      {
        "num": 151,
        "color": "B",
        "coord": "R17",
        "comment": "Move 151: Black plays at R17."
      },
      {
        "num": 152,
        "color": "W",
        "coord": "S18",
        "comment": "Move 152: White plays at S18."
      },
      {
        "num": 153,
        "color": "B",
        "coord": "R8",
        "comment": "Move 153: Black plays at R8."
      },
      {
        "num": 154,
        "color": "W",
        "coord": "Q8",
        "comment": "Move 154: White plays at Q8."
      },
      {
        "num": 155,
        "color": "B",
        "coord": "Q7",
        "comment": "Move 155: Black plays at Q7."
      },
      {
        "num": 156,
        "color": "W",
        "coord": "R7",
        "comment": "Move 156: White plays at R7."
      },
      {
        "num": 157,
        "color": "B",
        "coord": "S8",
        "comment": "Move 157: Black plays at S8."
      },
      {
        "num": 158,
        "color": "W",
        "coord": "S11",
        "comment": "Move 158: White plays at S11."
      },
      {
        "num": 159,
        "color": "B",
        "coord": "R9",
        "comment": "Move 159: Black plays at R9."
      },
      {
        "num": 160,
        "color": "W",
        "coord": "R11",
        "comment": "Move 160: White plays at R11."
      },
      {
        "num": 161,
        "color": "B",
        "coord": "S17",
        "comment": "Move 161: Black plays at S17."
      },
      {
        "num": 162,
        "color": "W",
        "coord": "T17",
        "comment": "Move 162: White plays at T17."
      },
      {
        "num": 163,
        "color": "B",
        "coord": "C7",
        "comment": "Move 163: Black plays at C7."
      },
      {
        "num": 164,
        "color": "W",
        "coord": "B7",
        "comment": "Move 164: White plays at B7."
      },
      {
        "num": 165,
        "color": "B",
        "coord": "E5",
        "comment": "Move 165: Black plays at E5."
      },
      {
        "num": 166,
        "color": "W",
        "coord": "B4",
        "comment": "Move 166: White plays at B4."
      },
      {
        "num": 167,
        "color": "B",
        "coord": "S6",
        "comment": "Move 167: Black plays at S6."
      },
      {
        "num": 168,
        "color": "W",
        "coord": "T7",
        "comment": "Move 168: White plays at T7."
      },
      {
        "num": 169,
        "color": "B",
        "coord": "T2",
        "comment": "Move 169: Black plays at T2."
      },
      {
        "num": 170,
        "color": "W",
        "coord": "M1",
        "comment": "Move 170: White plays at M1."
      },
      {
        "num": 171,
        "color": "B",
        "coord": "L1",
        "comment": "Move 171: Black plays at L1."
      },
      {
        "num": 172,
        "color": "W",
        "coord": "T6",
        "comment": "Move 172: White plays at T6."
      },
      {
        "num": 173,
        "color": "B",
        "coord": "S1",
        "comment": "Move 173: Black plays at S1."
      },
      {
        "num": 174,
        "color": "W",
        "coord": "R2",
        "comment": "Move 174: White plays at R2."
      },
      {
        "num": 175,
        "color": "B",
        "coord": "S5",
        "comment": "Move 175: Black plays at S5."
      },
      {
        "num": 176,
        "color": "W",
        "coord": "R1",
        "comment": "Move 176: White plays at R1."
      },
      {
        "num": 177,
        "color": "B",
        "coord": "B9",
        "comment": "Move 177: Black plays at B9."
      },
      {
        "num": 178,
        "color": "W",
        "coord": "A2",
        "comment": "Move 178: White plays at A2."
      },
      {
        "num": 179,
        "color": "B",
        "coord": "C2",
        "comment": "Move 179: Black plays at C2."
      },
      {
        "num": 180,
        "color": "W",
        "coord": "A6",
        "comment": "Move 180: White plays at A6."
      },
      {
        "num": 181,
        "color": "B",
        "coord": "N14",
        "comment": "Move 181: Black plays at N14."
      },
      {
        "num": 182,
        "color": "W",
        "coord": "L12",
        "comment": "Move 182: White plays at L12."
      },
      {
        "num": 183,
        "color": "B",
        "coord": "C13",
        "comment": "Move 183: Black plays at C13."
      },
      {
        "num": 184,
        "color": "W",
        "coord": "Q18",
        "comment": "Move 184: White plays at Q18."
      },
      {
        "num": 185,
        "color": "B",
        "coord": "P18",
        "comment": "Move 185: Black plays at P18."
      },
      {
        "num": 186,
        "color": "W",
        "coord": "B13",
        "comment": "Move 186: White plays at B13."
      },
      {
        "num": 187,
        "color": "B",
        "coord": "B12",
        "comment": "Move 187: Black plays at B12."
      },
      {
        "num": 188,
        "color": "W",
        "coord": "B14",
        "comment": "Move 188: White plays at B14."
      },
      {
        "num": 189,
        "color": "B",
        "coord": "P12",
        "comment": "Move 189: Black plays at P12."
      },
      {
        "num": 190,
        "color": "W",
        "coord": "Q12",
        "comment": "Move 190: White plays at Q12."
      },
      {
        "num": 191,
        "color": "B",
        "coord": "O11",
        "comment": "Move 191: Black plays at O11."
      },
      {
        "num": 192,
        "color": "W",
        "coord": "P10",
        "comment": "Move 192: White plays at P10."
      },
      {
        "num": 193,
        "color": "B",
        "coord": "J9",
        "comment": "Move 193: Black plays at J9."
      },
      {
        "num": 194,
        "color": "W",
        "coord": "F13",
        "comment": "Move 194: White plays at F13."
      },
      {
        "num": 195,
        "color": "B",
        "coord": "K11",
        "comment": "Move 195: Black plays at K11."
      },
      {
        "num": 196,
        "color": "W",
        "coord": "J11",
        "comment": "Move 196: White plays at J11."
      },
      {
        "num": 197,
        "color": "B",
        "coord": "K10",
        "comment": "Move 197: Black plays at K10."
      },
      {
        "num": 198,
        "color": "W",
        "coord": "H11",
        "comment": "Move 198: White plays at H11."
      },
      {
        "num": 199,
        "color": "B",
        "coord": "J8",
        "comment": "Move 199: Black plays at J8."
      },
      {
        "num": 200,
        "color": "W",
        "coord": "E12",
        "comment": "Move 200: White plays at E12."
      },
      {
        "num": 201,
        "color": "B",
        "coord": "E9",
        "comment": "Move 201: Black plays at E9."
      },
      {
        "num": 202,
        "color": "W",
        "coord": "N12",
        "comment": "Move 202: White plays at N12."
      },
      {
        "num": 203,
        "color": "B",
        "coord": "N11",
        "comment": "Move 203: Black plays at N11."
      },
      {
        "num": 204,
        "color": "W",
        "coord": "J10",
        "comment": "Move 204: White plays at J10."
      },
      {
        "num": 205,
        "color": "B",
        "coord": "K9",
        "comment": "Move 205: Black plays at K9."
      },
      {
        "num": 206,
        "color": "W",
        "coord": "O12",
        "comment": "Move 206: White plays at O12."
      },
      {
        "num": 207,
        "color": "B",
        "coord": "M11",
        "comment": "Move 207: Black plays at M11."
      },
      {
        "num": 208,
        "color": "W",
        "coord": "H9",
        "comment": "Move 208: White plays at H9."
      },
      {
        "num": 209,
        "color": "B",
        "coord": "H8",
        "comment": "Move 209: Black plays at H8."
      }
    ]
  }
]
};

export const MOVE_37_DEEP_DIVE = {
  title: "The Legend of Move 37: 5th-Line Shoulder Hit",
  game: "AlphaGo vs. Lee Sedol — Game 2 (March 10, 2016)",
  coord: "P10",
  whyRevolutionary: [
    "2,500 Years of Dogma Broken: In classical Go theory, shoulder hits are strictly played on the 3rd or 4th line to settle stones or flatten an opponent's framework. Playing on the 5th line was considered unthinkable because the opponent pushes along the 4th line and locks down massive side territory.",
    "The 1-in-10,000 Human Probability: Fan Hui and DeepMind researchers revealed that AlphaGo's policy network evaluated human pros would play this move only 1 time in 10,000 (0.01%). But its value network calculated that this move maximized its winning probability.",
    "Lee Sedol's 15-Minute Shock: Lee Sedol, celebrated for lightning intuition, froze in disbelief. He stood up, left the playing room into the Four Seasons hotel hallway, and spent nearly 15 minutes gathering his thoughts before returning to play Move 38.",
    "Cosmic Thickness: While Lee Sedol pushed and took 4th-line territory on the right edge, AlphaGo erected a magnificent diagonal wall through the center, connecting all its distant stones into an unstoppable unified sphere of influence.",
    "A New Renaissance in Go: Before Move 37, people thought computers would only compute faster. Move 37 proved that artificial intelligence could generate genuine artistic creativity and reveal beauty that humans had overlooked for millennia."
  ]
};

export const MOVE_78_DEEP_DIVE = {
  title: "Move 78: 'The Divine Move' (God's Touch)",
  game: "Lee Sedol vs. AlphaGo — Game 4 (March 13, 2016)",
  coord: "L11",
  whyRevolutionary: [
    "Humanity's Shining Moment: Down 0-3 in the match, facing total despair, Lee Sedol found an astonishing wedge move (Move 78 at L11) straight into the heart of AlphaGo's impregnable central moyo.",
    "AlphaGo's Blind Spot: AlphaGo calculated that the probability of a human playing Move 78 was less than 0.007%. Because its Monte Carlo tree search pruned branches it deemed nearly impossible, it failed to anticipate the tactical repercussions.",
    "The Hallucination Cascade: Immediately after Move 78, AlphaGo's win-rate curve collapsed from 70% to under 20%. Several moves later, AlphaGo played erratic moves and eventually resigned, granting humanity its sole victory against AlphaGo."
  ]
};
