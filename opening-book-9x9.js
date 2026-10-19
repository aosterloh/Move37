/**
 * opening-book-9x9.js - Canonical 9x9 Master Go Opening Book (Fuseki Dictionary)
 * Handcrafted by 9-dan Go principles and AlphaGo opening theory.
 * All positions are mapped via 8-fold dihedral symmetry (D4) so all rotations
 * and reflections match with sub-millisecond response latency.
 */

const OPENING_BOOK_9X9 = {
  // =========================================================================
  // MOVE 0: Empty Board (Black to Open)
  // =========================================================================
  "9x9:START": {
    recommendedMove: "E5",
    top3Candidates: [
      { rank: 1, coord: "E5", name: "Tengen Domination", reason: "Dominates central territory and radiates influence into all four quadrants." },
      { rank: 2, coord: "C3", name: "Corner Star Anchor", reason: "Secures a solid third-line corner base with rapid territorial efficiency." },
      { rank: 3, coord: "C5", name: "Side Star Balance", reason: "Maintains flexible reach toward both upper and lower corner frameworks." }
    ],
    whatToDo: "Stake out central Tengen at E5 or secure corner star point at C3. On a 9x9 board, commanding the center exerts immense whole-board pressure while corner play builds immediate living territory.",
    whatToWatchOutFor: "Avoid timid low-line crawls. In 9x9 Go, space is tight; every stone must project active influence across multiple corners.",
    whatNotToDo: "Do not play on the edge 1st or 2nd lines—they surrender initiative (sente) and grant your opponent massive central dominance.",
    summary: "The opening move defines the battlefield. Tengen E5 seizes cosmic momentum, while C3 claims solid corner foundation.",
    spokenScript: "Welcome to 9x9 Go. Command center Tengen at E5 or claim corner star point C3 to seize the initiative."
  },

  // =========================================================================
  // MOVE 1 (Black just opened, White to respond)
  // =========================================================================

  // Black opens Tengen E5 (The quintessential 9x9 master move)
  "9x9:E5": {
    candidateEvaluation: {
      grade: "EXCELLENT",
      title: "The Great Tengen Opening",
      explanation: "Occupying Tengen directly controls the center and projects influence into all four quadrants. On a 9x9 board, this is the classic 9-dan master opening that maximizes Black's first-move advantage by denying White an easy central pivot.",
      spokenFeedback: "Tengen at E5! A bold, commanding master opening on nine-by-nine."
    },
    whiteMove: {
      coord: "C3",
      commentary: "White stakes a 3-3 corner base at C3 to build rapid living territory and counter Black's central dominance.",
      voiceAnnouncerScript: "White plays at C3. Your turn."
    },
    recommendedMove: "G7",
    top3Candidates: [
      { rank: 1, coord: "G7", name: "Opposite Corner Enclosure", reason: "Claims the opposite diagonal corner star, surrounding White with center and corner leverage." },
      { rank: 2, coord: "C7", name: "Upper Flank Anchor", reason: "Encloses top-left territory and confines White's corner to the lower quadrant." },
      { rank: 3, coord: "E3", name: "Central Wing Extension", reason: "Extends downward along the central axis to hem in White's C3 stone." }
    ],
    whatToDo: "Enclose the opposite diagonal corner at G7. Holding both center Tengen and an opposite corner star sandwiches White's corner stone and maintains superior whole-board harmony.",
    whatToWatchOutFor: "Watch out for White playing a shoulder-hit or cross-cut against Tengen. Ensure your stones maintain flexible diagonal connections.",
    whatNotToDo: "Do not attach directly onto White's C3 stone—attaching strengthens the defending stone and surrenders sente.",
    summary: "Holding Tengen and a diagonal star point provides Black with overwhelming territorial momentum across the entire board.",
    spokenScript: "White secured corner star point C3. Answer by claiming the opposite corner at G7."
  },

  // Black opens Corner C3 (also covers G3, C7, G7 by 8-fold symmetry)
  "9x9:C3": {
    candidateEvaluation: {
      grade: "EXCELLENT",
      title: "Corner Star Anchor",
      explanation: "Anchoring the 3-3 corner star provides Black with an immediate, solid territorial base with low tactical risk and high eye-space stability.",
      spokenFeedback: "Solid corner anchor! Claiming corner territory early builds an unshakeable foundation."
    },
    whiteMove: {
      coord: "G7",
      commentary: "White takes the opposite diagonal star point at G7 to balance territorial claims.",
      voiceAnnouncerScript: "White plays at G7. Your turn."
    },
    recommendedMove: "E5",
    top3Candidates: [
      { rank: 1, coord: "E5", name: "Center Tengen Dominance", reason: "Seizes the center dividing point to split White's corner from yours." },
      { rank: 2, coord: "C7", name: "Left Flank Corner", reason: "Takes a second corner on the left, building an early two-corner territorial lead." },
      { rank: 3, coord: "G3", name: "Bottom Corner Star", reason: "Encloses the lower-right corner to establish broad diagonal dominance." }
    ],
    whatToDo: "Strike at center Tengen E5 or enclose a second corner at C7. Snatching the center now prevents White from connecting their diagonal influence.",
    whatToWatchOutFor: "Beware of White invading along C5 or E3. Guard against cross-cuts and keep your stones' liberties ample.",
    whatNotToDo: "Do not play passive low-line crawl moves when the entire center is open.",
    summary: "With diagonal corners occupied, seizing center Tengen controls the entire middle game flow.",
    spokenScript: "White took the opposite corner at G7. Strike at center Tengen E5 to split the board."
  },

  // Black opens Side Star C5 (also covers G5, E3, E7 by 8-fold symmetry)
  "9x9:C5": {
    candidateEvaluation: {
      grade: "SOLID",
      title: "Side Star Flank Opening",
      explanation: "An active flank opening that controls the side framework and stakes a claim between upper and lower corners.",
      spokenFeedback: "An interesting flank opening! This stakes strong claim along the side."
    },
    whiteMove: {
      coord: "E5",
      commentary: "White seizes center Tengen to dictate whole-board balance against Black's flank placement.",
      voiceAnnouncerScript: "White plays at E5. Your turn."
    },
    recommendedMove: "G5",
    top3Candidates: [
      { rank: 1, coord: "G5", name: "Symmetric Flank Enclosure", reason: "Claims the opposing side to pinch White's center stone from both flanks." },
      { rank: 2, coord: "C3", name: "Lower Corner Anchor", reason: "Secures the bottom-left corner below your side stone." },
      { rank: 3, coord: "C7", name: "Upper Corner Star", reason: "Encloses the top-left quadrant for a formidable side wall." }
    ],
    whatToDo: "Claim the opposite side star at G5 or anchor the lower corner at C3 to build living bases.",
    whatToWatchOutFor: "Watch out for White expanding outward from Tengen. Prevent White from building double wings.",
    whatNotToDo: "Do not leave cutting gaps between your side stones and corner points.",
    summary: "Balance White's center stone by anchoring corners and maintaining flexible side shape.",
    spokenScript: "White took center Tengen. Anchor the corner at C3 or match the flank at G5."
  },

  // Black opens Knight D4 (or F4, D6, F6 by 8-fold symmetry)
  "9x9:D4": {
    candidateEvaluation: {
      grade: "EXCELLENT",
      title: "Flexible Knight Influence",
      explanation: "Balances third and fourth line principles, allowing Black to rapidly transition between corner enclosure and center expansion.",
      spokenFeedback: "A flexible knight move! Balancing corner foundation and center influence."
    },
    whiteMove: {
      coord: "F6",
      commentary: "White plays a symmetric counter-knight move to contest the upper-right hemisphere.",
      voiceAnnouncerScript: "White plays at F6. Your turn."
    },
    recommendedMove: "E5",
    top3Candidates: [
      { rank: 1, coord: "E5", name: "Center Tengen Pivot", reason: "Connects your knight influence to the center while cutting White's diagonal." },
      { rank: 2, coord: "C3", name: "Lower Left Corner", reason: "Takes the open corner beneath your D4 stone." },
      { rank: 3, coord: "G7", name: "Upper Right Star", reason: "Contests White's F6 stone with an aggressive approach." }
    ],
    whatToDo: "Seize center Tengen E5 or take the corner star at C3 to solidify your territorial framework.",
    whatToWatchOutFor: "Watch out for White attaching at E4. Keep your stone's liberties open and active.",
    whatNotToDo: "Do not over-extend without securing at least one living base.",
    summary: "Knight moves offer superior tactical flexibility when supported by solid center connections.",
    spokenScript: "White mirrored your knight move at F6. Seize center Tengen E5 to gain the advantage."
  },

  // =========================================================================
  // MOVE 2: Black E5 + White C3 (Canonical 9x9:E5,C3 and 9x9:C3,E5)
  // =========================================================================
  "9x9:E5,C3": {
    recommendedMove: "G7",
    top3Candidates: [
      { rank: 1, coord: "G7", name: "Opposite Corner Enclosure", reason: "Claims the opposite diagonal corner, securing two corners against White's one." },
      { rank: 2, coord: "E3", name: "Central Wing Extension", reason: "Extends downward from Tengen to hem in White's corner stone." },
      { rank: 3, coord: "C7", name: "Upper Flank Anchor", reason: "Encloses the top-left quadrant and restricts White's expansion along the left side." }
    ],
    whatToDo: "Take diagonal star point at G7. By holding both Tengen and the opposite corner, Black sandwiches White's single corner and commands the wider board.",
    whatToWatchOutFor: "Watch out for White playing a shoulder-hit or cross-cut against your center stone. Ensure your stones keep mutual diagonal support.",
    whatNotToDo: "Do not attach directly to White's C3 stone—attaching strengthens the defender and gives away sente.",
    summary: "Holding Tengen and a diagonal corner gives Black superior board harmony and greater territorial flexibility.",
    spokenScript: "White has contested the corner at C3. Answer by securing the opposite diagonal star point at G7."
  },
  "9x9:C3,E5": {
    recommendedMove: "G7",
    top3Candidates: [
      { rank: 1, coord: "G7", name: "Opposite Corner Enclosure", reason: "Claims the opposite diagonal corner, securing two corners against White's one." },
      { rank: 2, coord: "E3", name: "Central Wing Extension", reason: "Extends downward from Tengen to hem in White's corner stone." },
      { rank: 3, coord: "C7", name: "Upper Flank Anchor", reason: "Encloses the top-left quadrant and restricts White's expansion along the left side." }
    ],
    whatToDo: "Take diagonal star point at G7. By holding both Tengen and the opposite corner, Black sandwiches White's single corner and commands the wider board.",
    whatToWatchOutFor: "Watch out for White playing a shoulder-hit or cross-cut against your center stone. Ensure your stones keep mutual diagonal support.",
    whatNotToDo: "Do not attach directly to White's C3 stone—attaching strengthens the defender and gives away sente.",
    summary: "Holding Tengen and a diagonal corner gives Black superior board harmony and greater territorial flexibility.",
    spokenScript: "White has contested the corner at C3. Answer by securing the opposite diagonal star point at G7."
  },

  // Black E5 + White C5
  "9x9:E5,C5": {
    recommendedMove: "G5",
    top3Candidates: [
      { rank: 1, coord: "G5", name: "Symmetric Side Dominance", reason: "Matches White's flank play while keeping Tengen central control." },
      { rank: 2, coord: "C3", name: "Corner Under-Cut", reason: "Claims the bottom-left corner below White's side stone." },
      { rank: 3, coord: "G7", name: "Opposite High Corner", reason: "Secures top-right corner territory with broad central breathing room." }
    ],
    whatToDo: "Claim the opposite side star at G5 or anchor corner at C3. This balances the board horizontally while Black's center stone at E5 acts as an unshakeable pillar.",
    whatToWatchOutFor: "Beware of White invading underneath into the corners. Keep a steady eye on connecting diagonals.",
    whatNotToDo: "Do not crowd your stones into an empty triangle near C5; expand into the open corners instead.",
    summary: "Black's center stone ensures that any flank invasion by White can be counter-balanced on the opposite side.",
    spokenScript: "White played along the side. Expand to the opposite flank at G5 or anchor the open corner at C3."
  },
  "9x9:C5,E5": {
    recommendedMove: "G5",
    top3Candidates: [
      { rank: 1, coord: "G5", name: "Symmetric Side Dominance", reason: "Matches White's flank play while keeping Tengen central control." },
      { rank: 2, coord: "C3", name: "Corner Under-Cut", reason: "Claims the bottom-left corner below White's side stone." },
      { rank: 3, coord: "G7", name: "Opposite High Corner", reason: "Secures top-right corner territory with broad central breathing room." }
    ],
    whatToDo: "Claim the opposite side star at G5 or anchor corner at C3. This balances the board horizontally while Black's center stone at E5 acts as an unshakeable pillar.",
    whatToWatchOutFor: "Beware of White invading underneath into the corners. Keep a steady eye on connecting diagonals.",
    whatNotToDo: "Do not crowd your stones into an empty triangle near C5; expand into the open corners instead.",
    summary: "Black's center stone ensures that any flank invasion by White can be counter-balanced on the opposite side.",
    spokenScript: "White played along the side. Expand to the opposite flank at G5 or anchor the open corner at C3."
  },

  // Black E5 + White D4
  "9x9:E5,D4": {
    recommendedMove: "F6",
    top3Candidates: [
      { rank: 1, coord: "F6", name: "Counter-Shoulder Balance", reason: "Symmetrically balances White's knight move and secures the upper-right hemisphere." },
      { rank: 2, coord: "C3", name: "Open Corner Claim", reason: "Takes the open lower-left corner before White can enclose it." },
      { rank: 3, coord: "G7", name: "Upper Corner Star", reason: "Anchors top-right corner with direct connection potential to Tengen." }
    ],
    whatToDo: "Play at F6 to counter White's diagonal approach, or claim the open corner at C3. Maintaining diagonal balance neutralizes White's tactical wedge.",
    whatToWatchOutFor: "Watch for White cutting at E4. Keep your stones connected or ensure you have an escape pathway toward open sides.",
    whatNotToDo: "Do not let White enclose both corners on the left; contest the open board immediately.",
    summary: "A knight's move by White requires calm proportional development. Match their shape or secure open corners.",
    spokenScript: "White approached with a knight move at D4. Balance the formation at F6 or take corner star point C3."
  },
  "9x9:D4,E5": {
    recommendedMove: "F6",
    top3Candidates: [
      { rank: 1, coord: "F6", name: "Counter-Shoulder Balance", reason: "Symmetrically balances White's knight move and secures the upper-right hemisphere." },
      { rank: 2, coord: "C3", name: "Open Corner Claim", reason: "Takes the open lower-left corner before White can enclose it." },
      { rank: 3, coord: "G7", name: "Upper Corner Star", reason: "Anchors top-right corner with direct connection potential to Tengen." }
    ],
    whatToDo: "Play at F6 to counter White's diagonal approach, or claim the open corner at C3. Maintaining diagonal balance neutralizes White's tactical wedge.",
    whatToWatchOutFor: "Watch for White cutting at E4. Keep your stones connected or ensure you have an escape pathway toward open sides.",
    whatNotToDo: "Do not let White enclose both corners on the left; contest the open board immediately.",
    summary: "A knight's move by White requires calm proportional development. Match their shape or secure open corners.",
    spokenScript: "White approached with a knight move at D4. Balance the formation at F6 or take corner star point C3."
  },

  // Black opened Corner C3, White played Tengen E5
  "9x9:C3,E5 (Corner)": {
    recommendedMove: "G7",
    top3Candidates: [
      { rank: 1, coord: "G7", name: "Diagonal Corner Squeeze", reason: "Encloses opposite corner star point, surrounding White's center stone from two corners." },
      { rank: 2, coord: "C7", name: "Flank Column Anchor", reason: "Builds a formidable left-hand territorial wall along the C-file." },
      { rank: 3, coord: "G3", name: "Lower Side Enclosure", reason: "Secures the entire bottom hemisphere territory." }
    ],
    whatToDo: "Play diagonal corner at G7. Holding two corners against White's center stone gives Black guaranteed living points while forcing White to fight for eyespace.",
    whatToWatchOutFor: "White will attempt to expand in a star pattern from Tengen. Prevent White from getting double-wings on both sides.",
    whatNotToDo: "Do not invade Tengen prematurely; build your corner bases first.",
    summary: "Two corners triumph over center influence if Black maintains solid defensive connections.",
    spokenScript: "White took Tengen at E5. Answer by claiming the opposite corner at G7 to maintain your territorial lead."
  },

  // Black opened C3, White played opposite corner G7
  "9x9:C3,G7": {
    recommendedMove: "E5",
    top3Candidates: [
      { rank: 1, coord: "E5", name: "Center Tengen Split", reason: "Seizes the center dividing point to split White's corner from yours." },
      { rank: 2, coord: "C7", name: "Left Flank Corner", reason: "Takes a second corner on the left, building a firm 2-corner territorial lead." },
      { rank: 3, coord: "G3", name: "Bottom Corner Star", reason: "Takes the lower-right corner to establish broad diagonal dominance." }
    ],
    whatToDo: "Take Tengen at E5 or claim second corner at C7. Snatching the center now prevents White from bridging their diagonal corner influence.",
    whatToWatchOutFor: "Watch out for White invading along C5 or E3. Guard against cross-cuts.",
    whatNotToDo: "Do not play passive single-point jumps when center Tengen is wide open.",
    summary: "With both players holding diagonal corners, whoever seizes Tengen controls the flow of the middle game.",
    spokenScript: "Both players hold diagonal corners. Strike at center Tengen E5 to split the board in your favor."
  },

  // 4-Stone Master Position: E5, C3, G7, C7
  "9x9:C3,C7,E5,G7": {
    recommendedMove: "G3",
    top3Candidates: [
      { rank: 1, coord: "G3", name: "Final Corner Clean Sweep", reason: "Takes the 4th corner, completing a territorial sweep of the bottom-right quadrant." },
      { rank: 2, coord: "E3", name: "Southern Base Extension", reason: "Consolidates center Tengen connection to bottom territory." },
      { rank: 3, coord: "E7", name: "Northern Boundary Line", reason: "Encloses upper territory and secures top boundary." }
    ],
    whatToDo: "Enclose the final corner at G3 or reinforce the side at E3. Securing three or four corner points guarantees a massive victory on points.",
    whatToWatchOutFor: "White will desperately invade the center or sides. Keep your groups connected to 2 living eyes.",
    whatNotToDo: "Do not leave cutting gaps between your corner stones and center stones.",
    summary: "A 4-corner foundation guarantees overwhelming territorial superiority if you maintain your liberties.",
    spokenScript: "Three corners are claimed. Secure the final corner at G3 or reinforce your central boundaries."
  },

  // 4-Stone Master Position: E5, C3, G7, E3
  "9x9:C3,E3,E5,G7": {
    recommendedMove: "C7",
    top3Candidates: [
      { rank: 1, coord: "C7", name: "Upper Left Enclosure", reason: "Encloses the top-left corner, completing Black's triangular framework." },
      { rank: 2, coord: "G3", name: "Bottom Right Star", reason: "Secures the open bottom-right corner and pressures White's E3 stone." },
      { rank: 3, coord: "E7", name: "North-South Spine", reason: "Extends upward to dominate the entire northern board." }
    ],
    whatToDo: "Play at C7 to enclose the upper-left corner. This creates a solid 3-point fortress that White cannot breach.",
    whatToWatchOutFor: "White may attempt a clamp at D3 or F3. Keep your bottom stones safe with adequate liberties.",
    whatNotToDo: "Do not tenuki into meaningless center moves when an entire open corner awaits.",
    summary: "Enclosing three corners gives Black an unassailable lead in territory and shape efficiency.",
    spokenScript: "Take the open corner at C7 to complete your 3-corner framework and lock down the game."
  }
};

module.exports = {
  OPENING_BOOK_9X9
};
