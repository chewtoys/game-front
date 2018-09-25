export default {
    "fighter": {
        "picture": "chasseur.png",
        "picto": "chasseur_64px.png",
        "slots": [
            {
                "position": 1,
                "top": 10,
                "left": 47.5,
                "shape": "circle",
                "size": "small"
            },
            {
                "position": 2,
                "bottom": 10,
                "left": 47.5,
                "shape": "square",
                "size": "medium"
            }
        ],
        "stats": {
            "armor": 45
        },
        "price": [
            {
                "type": "points",
                "amount": 3
            },
            {
                "type": "credits",
                "amount": 125
            }
        ]
    },
    "bomber": {
        "picture": "bombardier.png",
        "picto": "bombardier_64px.png",
        "slots": [
            {
                "position": 1,
                "top": 10,
                "left": 45,
                "shape": "circle",
                "size": "small"
            },
            {
                "position": 2,
                "top": 10,
                "right": 45,
                "shape": "circle",
                "size": "small"
            },
            {
                "position": 3,
                "bottom": 10,
                "left": 47.5,
                "shape": "square",
                "size": "medium"
            }
        ],
        "stats": {
            "armor": 60
        },
        "price": [
            {
                "type": "points",
                "amount": 5
            },
            {
                "type": "credits",
                "amount": 200
            }
        ]
    },
}
