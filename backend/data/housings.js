const housings = [
    {
        "user": "5fc3aadbcb4a6642bdd41234",
        "title": "North District",
        "images": [
            "north_district_image1.jpg",
            "north_district_image2.jpg"
        ],
        "description": "Modern living spaces with amenities designed to bring people together, North District is a vibrant community near UCR.",
        "reviews": [
            {
                "name": "Alice Johnson",
                "rating": 5,
                "comment": "Living in North District has been an amazing experience. The community is friendly, and the facilities are top-notch.",
                "user": "5fc3abefcb4a6642bdd41235"
            }
        ],
        "rating": 5,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.979565, -117.326652]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd41236",
        "title": "Lothian",
        "images": [
            "lothian_image1.jpg",
            "lothian_image2.jpg"
        ],
        "description": "Lothian is known for its strong community vibe and proximity to campus, offering a great balance of study and social life.",
        "reviews": [
            {
                "name": "Bob Smith",
                "rating": 4,
                "comment": "Lothian's location is unbeatable for getting to classes. The dining hall is also a huge plus!",
                "user": "5fc3aadbcb4a6642bdd41236"
            }
        ],
        "rating": 4,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.975574, -117.322491]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd41237",
        "title": "Pentland Hills",
        "images": [
            "pentland_hills_image1.jpg",
            "pentland_hills_image2.jpg"
        ],
        "description": "Offering an engaging living-learning environment, Pentland Hills has a mix of single and double occupancy rooms.",
        "reviews": [
            {
                "name": "Mark Johnson",
                "rating": 5,
                "comment": "The facilities are new and well-maintained, and I've met so many people in the community.",
                "user": "5fc3aadbcb4a6642bdd41237"
            }
        ],
        "rating": 5,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.977834, -117.322912]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd41238",
        "title": "Glen Mor",
        "images": [
            "glen_mor_image1.jpg",
            "glen_mor_image2.jpg"
        ],
        "description": "Glen Mor brings the convenience of apartment living to the UCR campus, complete with spacious layouts and integrated social spaces.",
        "reviews": [
            {
                "name": "Matt Hardy",
                "rating": 4,
                "comment": "Glen Mor offers the best of both worlds: social activities and quiet spaces for studying.",
                "user": "5fc3aadbcb4a6642bdd41238"
            }
        ],
        "rating": 4,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.978065, -117.320107]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd41239",
        "title": "Stonehaven",
        "images": [
            "stonehaven_image1.jpg",
            "stonehaven_image2.jpg"
        ],
        "description": "Nestled just off campus, Stonehaven offers fully furnished apartments in a serene environment, perfect for upper-year and graduate students.",
        "reviews": [
            {
                "name": "Ella Fitzgerald",
                "rating": 4,
                "comment": "Stonehaven has been a quiet retreat from the bustling campus life. Perfect for focused studies and relaxation.",
                "user": "5fc3aadbcb4a6642bdd41239"
            }
        ],
        "rating": 4,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.984034, -117.331818]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123a",
        "title": "Falkirk",
        "images": [
            "falkirk_image1.jpg",
            "falkirk_image2.jpg"
        ],
        "description": "Falkirk offers affordable apartment living with the convenience of being close to campus, ideal for students looking for independence.",
        "reviews": [
            {
                "name": "Michael Thompson",
                "rating": 3,
                "comment": "Falkirk's affordability is great, but the amenities are a bit dated. It's a good place if you're on a budget.",
                "user": "5fc3aadbcb4a6642bdd4123a"
            }
        ],
        "rating": 3,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.980236, -117.332112]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123b",
        "title": "The Plaza",
        "images": [
            "the_plaza_image1.jpg",
            "the_plaza_image2.jpg"
        ],
        "description": "The Plaza is known for its spacious apartments and vibrant community life, offering a unique living experience close to UCR.",
        "reviews": [
            {
                "name": "Samantha Right",
                "rating": 5,
                "comment": "Absolutely love The Plaza! The community events are fun, and my apartment is spacious and comfortable.",
                "user": "5fc3aadbcb4a6642bdd4123b"
            }
        ],
        "rating": 5,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.978380, -117.333488]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123c",
        "title": "Oban",
        "images": [
            "oban_image1.jpg",
            "oban_image2.jpg"
        ],
        "description": "Oban's modern apartments offer a peaceful living environment with all the comforts of home, just minutes from campus.",
        "reviews": [
            {
                "name": "Lucas Green",
                "rating": 4,
                "comment": "Oban has been fantastic. It's quiet, clean, and everything is new. A bit pricier, but worth it.",
                "user": "5fc3aadbcb4a6642bdd4123c"
            }
        ],
        "rating": 4,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.978379, -117.332762]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123d",
        "title": "Bannockburn Village",
        "images": [
            "bannockburn_village_image1.jpg",
            "bannockburn_village_image2.jpg"
        ],
        "description": "Bannockburn Village offers a blend of traditional and modern living spaces, ideal for students seeking a communal living experience.",
        "reviews": [
            {
                "name": "Henry Lee",
                "rating": 3,
                "comment": "The community at Bannockburn is great, but the facilities could use some updates. Great for making friends, though.",
                "user": "5fc3aadbcb4a6642bdd4123d"
            }
        ],
        "rating": 3,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.977487, -117.331532]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123e",
        "title": "Dundee",
        "images": [
            "dundee_image1.jpg",
            "dundee_image2.jpg"
        ],
        "description": "Dundee's recently renovated spaces offer a modern, comfortable living environment, with a variety of room layouts to choose from.",
        "reviews": [
            {
                "name": "Isabel Ruiz",
                "rating": 5,
                "comment": "Dundee's renovation has made it the best place to live on campus. The rooms are great and the community is welcoming.",
                "user": "5fc3aadbcb4a6642bdd4123e"
            }
        ],
        "rating": 5,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.979079, -117.324200]
        }
    },
    {
        "user": "5fc3aadbcb4a6642bdd4123f",
        "title": "Aberdeen-Inverness",
        "images": [
            "aberdeen_inverness_image1.jpg",
            "aberdeen_inverness_image2.jpg"
        ],
        "description": "Aberdeen-Inverness offers a traditional residence hall experience with a strong sense of community and support for academic success.",
        "reviews": [
            {
                "name": "Tom Booker",
                "rating": 4,
                "comment": "Aberdeen-Inverness feels like a tight-knit community. It's a great place to live if you want the classic dorm experience.",
                "user": "5fc3aadbcb4a6642bdd4123f"
            }
        ],
        "rating": 4,
        "numReviews": 1,
        "location": {
            "type": "Point",
            "coordinates": [33.978334, -117.325607]
        }
    },
    // Add more housing entries as needed
];

export default housings;
