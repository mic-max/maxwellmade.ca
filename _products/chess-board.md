---
name: Chess Board
src: chessboard
price: 250
stock: 2
dimensions:
  h: 1.5
  w: 18
  d: 18
weight: 4
serial: 2023.001
options:
  - name: Grain Type
    id: grain
    opts:
      - value: face
        text: Face
      - value: end
        text: End
  - name: Thickness
    id: thickness
    opts:
      - value: 3/4"
        text: 3/4"
      - value: 1"
        text: 1"
        cost: 20
  - name: Square Size
    id: square
    opts:
      - value: 1.75"
        text: 1.75"
      - value: 2"
        text: 2"
        cost: 10
      - value: 2.25"
        text: 2.25"
        cost: 20
  - name: Light Wood
    id: lightwood
    opts:
      - value: maple
        text: Maple
      - value: birch
        text: Birch
      - value: cherry
        text: Cherry
      - value: custom
        text: Custom
        cost: 40
  - name: Dark Wood
    id: darkwood
    opts:
      - value: roastedmaple
        text: Roasted Maple
      - value: walnut
        text: Walnut
        cost: 20
      - value: custom
        text: Custom
        cost: 40
  - name: Border
    id: border
    opts:
      - value: none
        text: None
        cost: -40
      - value: light
        text: Light Wood
      - value: dark
        text: Dark Wood
      - value: lightdark
        text: Light Wood w/ Dark Inside Trim
        selected: true
      - value: darklight
        text: Dark Wood w/ Light Inside Trim
      - value: custom
        text: Custom
        cost: 40
  - name: Notation
    id: notation
    opts:
      - value: none
        text: None
      - value: one
        text: One Side
        cost: 10
      - value: both
        text: Both Sides
        cost: 20
  - name: Folding
    id: folding
    opts:
      - value: no
        text: No
      - value: yes
        text: Yes
        cost: 50
---

- Store pieces inside the board, max diameter 1.5"
