const fs = require('fs');
const ejs = require('ejs');
const { JSDOM } = require('jsdom');

// Load your EJS template from a file
// JSDOMconst template = fs.readFileSync('../views/home.ejs', 'utf-8');

// Mock data for testing
const testData = {
    searchQuery: "",
    currentPage: 1,
    totalPages : 2,
    title: 'Featured Recipes',
    data: {
        "count": 3239,
        "results": [
            {
                "approved_at": 1553195044,
                "aspect_ratio": "1:1",
                "beauty_url": null,
                "brand": null,
                "brand_id": null,
                "buzz_id": null,
                "canonical_id": "recipe:4704",
                "compilations": [
                    {
                        "approved_at": 1553197578,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:848",
                        "country": "US",
                        "created_at": 1546890391,
                        "description": "Whether you’re trying to be healthy, pulling an all-nighter, or just trying to get through the day, protein-packed snacks are your best friends. That’s because protein can give you an energy boost and help you stay fuller longer. From <a href=\"https://tasty.co/recipe/avocado-deviled-eggs\">avocado deviled eggs</a> to <a href=\"https://tasty.co/recipe/cacao-chia-pudding\">cacao chia pudding</a>, these snacks are full of protein-packed ingredients like Greek yogurt and almond butter, which will ensure you don’t get hangry anytime soon.",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 848,
                        "is_shoppable": true,
                        "keywords": null,
                        "language": "eng",
                        "name": "Protein-Packed Snacks",
                        "promotion": "partial",
                        "show": [
                            {
                                "id": 34,
                                "name": "Goodful"
                            }
                        ],
                        "slug": "protein-packed-snacks",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/199563.jpg",
                        "video_id": 73153,
                        "video_url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8"
                    },
                    {
                        "approved_at": 1578330513,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:1353",
                        "country": "US",
                        "created_at": 1578291052,
                        "description": null,
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 1353,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "5 Easy & Healthy Avocado Recipes",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 34,
                                "name": "Goodful"
                            }
                        ],
                        "slug": "5-easy-healthy-avocado-recipes",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/250396.jpg",
                        "video_id": 98266,
                        "video_url": "https://vid.tasty.co/output/156634/hls24_1578291102.m3u8"
                    },
                    {
                        "approved_at": 1582859703,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:1403",
                        "country": "US",
                        "created_at": 1582700418,
                        "description": null,
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 1403,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Healthy And Delicious Appetisers ",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 34,
                                "name": "Goodful"
                            }
                        ],
                        "slug": "healthy-and-delicious-appetisers",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/256517.jpg",
                        "video_id": 101158,
                        "video_url": "https://vid.tasty.co/output/161151/hls24_1582700566.m3u8"
                    },
                    {
                        "approved_at": 1599571488,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:1675",
                        "country": "US",
                        "created_at": 1598634358,
                        "description": "Can't sleep? Want to snack? These delicious snacks are a quick and easy fix to all your after-midnight hunger pangs. Chomp down on some <a href= \"https://tasty.co/recipe/hummus-and-carrot-sticks\">hummus and carrot sticks</a> or devour a couple handfuls of delicious <a href= \"https://tasty.co/recipe/spicy-roasted-chickpeas\">oven-roasted chickpeas</a>. And once you're full and satisfied, sail softly back into dreamland!",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 1675,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Healthy Snacks For Late-night Cravings",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "healthy-snacks-for-late-night-cravings",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/280958.jpg",
                        "video_id": 111496,
                        "video_url": "https://vid.tasty.co/output/177500/hls24_1598874098.m3u8"
                    },
                    {
                        "approved_at": 1622033473,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:2455",
                        "country": "US",
                        "created_at": 1621947459,
                        "description": "Planning a trip to the beach to celebrate the coming of summer? These easy snacks will make sure you're fueled and ready for the next game of water polo. From <a href=\"https://tasty.co/recipe/garlic-parmesan-and-herb-pita-chips\">parmesan garlic & herb pita chips</a> to super easy to make <a href=\"https://tasty.co/recipe/after-school-banana-roll-ups\">banana roll-ups</a>, these treats are beach-friendly and hassle free. So what are you waiting for? Pack up your picnic basket with these goodies: summer's here! ",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 2455,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Easy Snacks To Pack For Your Next Beach Trip",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "easy-snacks-to-pack-for-your-next-beach-trip",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/322976.jpg",
                        "video_id": 132618,
                        "video_url": "https://vid.tasty.co/output/203549/hls24_1621588827.m3u8"
                    },
                    {
                        "approved_at": 1622729093,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:2471",
                        "country": "US",
                        "created_at": 1622179434,
                        "description": "Looking for low-carb options? We've got plenty for you! The crispy <a href=\"https://tasty.co/recipe/easy-chicken-piccata\">Chicken Piccata</a> and the saucy <a href=\"https://tasty.co/recipe/ratatouille\">Ratatouille Lasagna</a> each pack tons of flavor without going overboard on carbs — and they pair well with just about anything. The hardest part? Choosing which dish to make first!",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 2471,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Low Carb Meals For A Healthy You",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "low-carb-meals-for-a-healthy-you",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/324268.jpg",
                        "video_id": 131584,
                        "video_url": "https://vid.tasty.co/output/204325/hls24_1622182197.m3u8"
                    },
                    {
                        "approved_at": 1630615490,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:2741",
                        "country": "US",
                        "created_at": 1628697577,
                        "description": " You can never go wrong with avocado, and these easy mouthwatering recipes can enjoyed at any time of the day. Start your day with a wholesome <a href=\"https://tasty.co/recipe/radish-avocado-toast\">Raddish Avocado Toast</a> or enjoy a <a href=\"https://tasty.co/recipe/salmon-crab-stack\">Salmon Crab Seafood Stack</a> on a lunch date with your special someone. But why settle for one when you have 31 options to try from? Avo-fun for the whole month! ",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 2741,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "31 Days 31 Avocado Recipes ",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "31-days-31-avocado-recipes",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/340641.jpg",
                        "video_id": 138926,
                        "video_url": "https://vid.tasty.co/output/214898/hls24_1630573823.m3u8"
                    },
                    {
                        "approved_at": 1632837818,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:2823",
                        "country": "US",
                        "created_at": 1631878927,
                        "description": null,
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 2823,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Make Healthy Snacks Tasty With These Recipes",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "make-healthy-snacks-tasty-with-these-recipes",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/342984.jpg",
                        "video_id": 141660,
                        "video_url": "https://vid.tasty.co/output/216394/hls24_1631879337.m3u8"
                    },
                    {
                        "approved_at": 1633453142,
                        "aspect_ratio": null,
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:2850",
                        "country": "US",
                        "created_at": 1632478266,
                        "description": "We've all had those days when you just don't feel like working out. Regardless of whether or not you make it to the gym, these recipes will keep you feeling engaged, alert, and fueled up for whatever comes your way. From <a href=\"https://tasty.co/recipe/keto-caprese-avocado-bowls\">caprese avocado bowls</a> to <a href=\"https://tasty.co/recipe/spinach-pasta\">spinach pasta</a>, these meals are nutritious, delicious, and nourishing.",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 2850,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Recipes For When You Don't Feel Like Working Out",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "recipes-for-when-you-don-t-feel-like-working-out",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://s3.amazonaws.com/video-api-prod/assets/5aadea18cb1043cda94b0b830f660c55/FB1.jpg",
                        "video_id": 142328,
                        "video_url": "https://vid.tasty.co/output/217137/hls24_1632478454.m3u8"
                    },
                    {
                        "approved_at": 1670282994,
                        "aspect_ratio": "1:1",
                        "beauty_url": null,
                        "buzz_id": null,
                        "canonical_id": "compilation:3382",
                        "country": "US",
                        "created_at": 1669724060,
                        "description": "With so many health benefits, you ought to use yogurt wisely and creatively! It is easy to digest, packed with vitamins, and a rich source of protein as well. Make the <a href=\"https://tasty.co/recipe/honey-granola-yogurt-bark\">Honey Granola Yogurt Bark</a> for your on-the-go meals. <a href=\"https://tasty.co/recipe/paprika-spiced-chicken-with-lemon-yogurt-and-crispy-potatoes\">Paprika-Spiced Chicken With Lemon Yogurt And Crispy Potatoes</a> is the perfect dinner recipe as it is delicious, easy and healthy, all at the same time!",
                        "draft_status": "published",
                        "facebook_posts": [],
                        "id": 3382,
                        "is_shoppable": false,
                        "keywords": null,
                        "language": "eng",
                        "name": "Use Your Yogurt Wisely!",
                        "promotion": "full",
                        "show": [
                            {
                                "id": 17,
                                "name": "Tasty"
                            }
                        ],
                        "slug": "use-your-yogurt-wisely",
                        "thumbnail_alt_text": "",
                        "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/413697.jpg",
                        "video_id": 175189,
                        "video_url": "https://vid.tasty.co/output/264265/hls24_1669784196.m3u8"
                    }
                ],
                "cook_time_minutes": 0,
                "country": "US",
                "created_at": 1546890315,
                "credits": [
                    {
                        "name": "Isabel Castillo",
                        "type": "internal"
                    },
                    {
                        "name": "Karlee Rotoly",
                        "type": "internal"
                    }
                ],
                "description": "This chicken salad is a lunchtime delight! Packed with creamy avocado, tender chicken, and crunchy veggies, it's a healthy and satisfying meal that won't weigh you down. Tossed in a tangy yogurt dressing with a hint of spice, it's a flavor explosion that's perfect for a light meal.",
                "draft_status": "published",
                "facebook_posts": [],
                "id": 4704,
                "inspired_by_url": null,
                "instructions": [
                    {
                        "appliance": null,
                        "display_text": "In a blender or food processor, combine the yogurt, lime juice, pepper, and chili powder and pulse to combine. Add ½ of the avocado and blend until creamy.",
                        "end_time": 26500,
                        "id": 43381,
                        "position": 1,
                        "start_time": 7000,
                        "temperature": null
                    },
                    {
                        "appliance": null,
                        "display_text": "In a medium bowl, combine the chicken, yogurt sauce, celery, the remaining ½ avocado, onion, and salt. Mix until well combined.",
                        "end_time": 43500,
                        "id": 43382,
                        "position": 2,
                        "start_time": 29000,
                        "temperature": null
                    },
                    {
                        "appliance": null,
                        "display_text": "Serve on low-carb bread and garnish with cilantro, or as desired.",
                        "end_time": 0,
                        "id": 43383,
                        "position": 3,
                        "start_time": 0,
                        "temperature": null
                    },
                    {
                        "appliance": null,
                        "display_text": "Enjoy!",
                        "end_time": 47166,
                        "id": 43384,
                        "position": 4,
                        "start_time": 44666,
                        "temperature": null
                    }
                ],
                "is_app_only": false,
                "is_one_top": false,
                "is_shoppable": true,
                "is_subscriber_content": false,
                "keywords": "avocado, chia pudding, chicken salad, chickpea chips, deviled eggs, easy, healthy, keto, protein, snacks, vegan, vegetarian",
                "language": "eng",
                "name": "Low-Carb Avocado Chicken Salad",
                "num_servings": 4,
                "nutrition": {
                    "calories": 250,
                    "carbohydrates": 13,
                    "fat": 8,
                    "fiber": 3,
                    "protein": 29,
                    "sugar": 8,
                    "updated_at": "2021-05-03T13:23:58+02:00"
                },
                "nutrition_visibility": "auto",
                "original_video_url": "https://s3.amazonaws.com/video-api-prod/assets/a0e1b07dc71c4ac6b378f24493ae2d85/FixedFBFinal.mp4",
                "prep_time_minutes": 0,
                "price": {
                    "consumption_portion": 200,
                    "consumption_total": 800,
                    "portion": 500,
                    "total": 1950,
                    "updated_at": "2024-03-31T07:14:50+02:00"
                },
                "promotion": "partial",
                "renditions": [
                    {
                        "aspect": "square",
                        "bit_rate": 1491,
                        "container": "mp4",
                        "content_type": "video/mp4",
                        "duration": 217498,
                        "file_size": 40535808,
                        "height": 720,
                        "maximum_bit_rate": null,
                        "minimum_bit_rate": null,
                        "name": "mp4_720x720",
                        "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/square_720/1546897597_00001.png",
                        "url": "https://vid.tasty.co/output/121934/square_720/1546897597",
                        "width": 720
                    },
                    {
                        "aspect": "square",
                        "bit_rate": 526,
                        "container": "mp4",
                        "content_type": "video/mp4",
                        "duration": 217498,
                        "file_size": 14280746,
                        "height": 320,
                        "maximum_bit_rate": null,
                        "minimum_bit_rate": null,
                        "name": "mp4_320x320",
                        "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/square_320/1546897597_00001.png",
                        "url": "https://vid.tasty.co/output/121934/square_320/1546897597",
                        "width": 320
                    },
                    {
                        "aspect": "square",
                        "bit_rate": 1490,
                        "container": "mp4",
                        "content_type": "video/mp4",
                        "duration": 217498,
                        "file_size": 40496760,
                        "height": 720,
                        "maximum_bit_rate": null,
                        "minimum_bit_rate": null,
                        "name": "mp4_720x720",
                        "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/landscape_720/1546897597_00001.png",
                        "url": "https://vid.tasty.co/output/121934/landscape_720/1546897597",
                        "width": 720
                    },
                    {
                        "aspect": "square",
                        "bit_rate": 862,
                        "container": "mp4",
                        "content_type": "video/mp4",
                        "duration": 217498,
                        "file_size": 23426496,
                        "height": 480,
                        "maximum_bit_rate": null,
                        "minimum_bit_rate": null,
                        "name": "mp4_480x480",
                        "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/landscape_480/1546897597_00001.png",
                        "url": "https://vid.tasty.co/output/121934/landscape_480/1546897597",
                        "width": 480
                    },
                    {
                        "aspect": "square",
                        "bit_rate": null,
                        "container": "ts",
                        "content_type": "application/vnd.apple.mpegurl",
                        "duration": 217509,
                        "file_size": null,
                        "height": 1080,
                        "maximum_bit_rate": 2684,
                        "minimum_bit_rate": 273,
                        "name": "low",
                        "poster_url": "https://img.buzzfeed.com/video-transcoder-prod/output/121934/1445289064805-h2exzu/1546897597_00001.png",
                        "url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8",
                        "width": 1080
                    }
                ],
                "sections": [
                    {
                        "components": [
                            {
                                "extra_comment": "",
                                "id": 50242,
                                "ingredient": {
                                    "created_at": 1495053532,
                                    "display_plural": "plain greek yogurts",
                                    "display_singular": "plain greek yogurt",
                                    "id": 428,
                                    "name": "plain greek yogurt",
                                    "updated_at": 1509035261
                                },
                                "measurements": [
                                    {
                                        "id": 731945,
                                        "quantity": "⅔",
                                        "unit": {
                                            "abbreviation": "c",
                                            "display_plural": "cups",
                                            "display_singular": "cup",
                                            "name": "cup",
                                            "system": "imperial"
                                        }
                                    },
                                    {
                                        "id": 731942,
                                        "quantity": "190",
                                        "unit": {
                                            "abbreviation": "g",
                                            "display_plural": "g",
                                            "display_singular": "g",
                                            "name": "gram",
                                            "system": "metric"
                                        }
                                    }
                                ],
                                "position": 1,
                                "raw_text": "⅔ cup plain Greek yogurt"
                            },
                            {
                                "extra_comment": "",
                                "id": 50243,
                                "ingredient": {
                                    "created_at": 1494878288,
                                    "display_plural": "lime juices",
                                    "display_singular": "lime juice",
                                    "id": 330,
                                    "name": "lime juice",
                                    "updated_at": 1509035269
                                },
                                "measurements": [
                                    {
                                        "id": 731940,
                                        "quantity": "1",
                                        "unit": {
                                            "abbreviation": "tbsp",
                                            "display_plural": "tablespoons",
                                            "display_singular": "tablespoon",
                                            "name": "tablespoon",
                                            "system": "imperial"
                                        }
                                    }
                                ],
                                "position": 2,
                                "raw_text": "1 tablespoon lime juice"
                            },
                            {
                                "extra_comment": "to taste",
                                "id": 50244,
                                "ingredient": {
                                    "created_at": 1493314935,
                                    "display_plural": "peppers",
                                    "display_singular": "pepper",
                                    "id": 29,
                                    "name": "pepper",
                                    "updated_at": 1509035287
                                },
                                "measurements": [
                                    {
                                        "id": 731943,
                                        "quantity": "0",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 3,
                                "raw_text": "Pepper, to taste"
                            },
                            {
                                "extra_comment": "",
                                "id": 50245,
                                "ingredient": {
                                    "created_at": 1493307101,
                                    "display_plural": "chili powders",
                                    "display_singular": "chili powder",
                                    "id": 7,
                                    "name": "chili powder",
                                    "updated_at": 1509035289
                                },
                                "measurements": [
                                    {
                                        "id": 731949,
                                        "quantity": "⅛",
                                        "unit": {
                                            "abbreviation": "tsp",
                                            "display_plural": "teaspoons",
                                            "display_singular": "teaspoon",
                                            "name": "teaspoon",
                                            "system": "imperial"
                                        }
                                    }
                                ],
                                "position": 4,
                                "raw_text": "⅛ teaspoon chili powder"
                            },
                            {
                                "extra_comment": "cubed, divided",
                                "id": 50246,
                                "ingredient": {
                                    "created_at": 1496185911,
                                    "display_plural": "avocados",
                                    "display_singular": "avocado",
                                    "id": 1005,
                                    "name": "avocado",
                                    "updated_at": 1509035215
                                },
                                "measurements": [
                                    {
                                        "id": 731941,
                                        "quantity": "1",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 5,
                                "raw_text": "1 avocado, cubed, divided"
                            },
                            {
                                "extra_comment": "cooked and shredded",
                                "id": 50247,
                                "ingredient": {
                                    "created_at": 1493430237,
                                    "display_plural": "chicken breasts",
                                    "display_singular": "chicken breast",
                                    "id": 50,
                                    "name": "chicken breast",
                                    "updated_at": 1509035286
                                },
                                "measurements": [
                                    {
                                        "id": 731944,
                                        "quantity": "2",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 6,
                                "raw_text": "2 chicken breasts, cooked and shredded"
                            },
                            {
                                "extra_comment": "diced",
                                "id": 50248,
                                "ingredient": {
                                    "created_at": 1495082620,
                                    "display_plural": "celeries",
                                    "display_singular": "celery",
                                    "id": 458,
                                    "name": "celery",
                                    "updated_at": 1509035259
                                },
                                "measurements": [
                                    {
                                        "id": 731946,
                                        "quantity": "1",
                                        "unit": {
                                            "abbreviation": "stalk",
                                            "display_plural": "stalks",
                                            "display_singular": "stalk",
                                            "name": "stalk",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 7,
                                "raw_text": "1 celery stalk, diced"
                            },
                            {
                                "extra_comment": "diced",
                                "id": 50249,
                                "ingredient": {
                                    "created_at": 1681493252,
                                    "display_plural": "diced red onions",
                                    "display_singular": "diced red onion",
                                    "id": 11117,
                                    "name": "diced red onion",
                                    "updated_at": 1681493252
                                },
                                "measurements": [
                                    {
                                        "id": 731951,
                                        "quantity": "2",
                                        "unit": {
                                            "abbreviation": "tbsp",
                                            "display_plural": "tablespoons",
                                            "display_singular": "tablespoon",
                                            "name": "tablespoon",
                                            "system": "imperial"
                                        }
                                    }
                                ],
                                "position": 8,
                                "raw_text": "2 tablespoons diced red onion"
                            },
                            {
                                "extra_comment": "to taste",
                                "id": 50250,
                                "ingredient": {
                                    "created_at": 1493307153,
                                    "display_plural": "kosher salts",
                                    "display_singular": "kosher salt",
                                    "id": 11,
                                    "name": "kosher salt",
                                    "updated_at": 1509035289
                                },
                                "measurements": [
                                    {
                                        "id": 731947,
                                        "quantity": "0",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 9,
                                "raw_text": "Kosher salt, to taste"
                            },
                            {
                                "extra_comment": "for serving (optional)",
                                "id": 50251,
                                "ingredient": {
                                    "created_at": 1682530849,
                                    "display_plural": "low-carb breads",
                                    "display_singular": "low-carb bread",
                                    "id": 11182,
                                    "name": "low-carb bread",
                                    "updated_at": 1682530849
                                },
                                "measurements": [
                                    {
                                        "id": 731948,
                                        "quantity": "0",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 10,
                                "raw_text": "Low-carb bread, for serving, optional"
                            },
                            {
                                "extra_comment": "for garnish",
                                "id": 50252,
                                "ingredient": {
                                    "created_at": 1527199111,
                                    "display_plural": "fresh cilantro leaves",
                                    "display_singular": "fresh cilantro leaf",
                                    "id": 4163,
                                    "name": "fresh cilantro leaves",
                                    "updated_at": 1527199111
                                },
                                "measurements": [
                                    {
                                        "id": 731950,
                                        "quantity": "0",
                                        "unit": {
                                            "abbreviation": "",
                                            "display_plural": "",
                                            "display_singular": "",
                                            "name": "",
                                            "system": "none"
                                        }
                                    }
                                ],
                                "position": 11,
                                "raw_text": "Fresh cilantro leaves, for garnish"
                            }
                        ],
                        "name": null,
                        "position": 1
                    }
                ],
                "seo_path": "9295813,64486,9299514",
                "seo_title": "",
                "servings_noun_plural": "servings",
                "servings_noun_singular": "serving",
                "show": {
                    "id": 34,
                    "name": "Goodful"
                },
                "show_id": 34,
                "slug": "low-carb-avocado-chicken-salad",
                "tags": [
                    {
                        "display_name": "North American",
                        "id": 64444,
                        "name": "north_american",
                        "root_tag_type": "cuisine",
                        "type": "cuisine"
                    },
                    {
                        "display_name": "Gluten-Free",
                        "id": 64465,
                        "name": "gluten_free",
                        "root_tag_type": "dietary",
                        "type": "dietary"
                    },
                    {
                        "display_name": "Healthy",
                        "id": 64466,
                        "name": "healthy",
                        "root_tag_type": "healthy",
                        "type": "healthy"
                    },
                    {
                        "display_name": "Low-Carb",
                        "id": 64467,
                        "name": "low_carb",
                        "root_tag_type": "healthy",
                        "type": "healthy"
                    },
                    {
                        "display_name": "Easy",
                        "id": 64471,
                        "name": "easy",
                        "root_tag_type": "difficulty",
                        "type": "difficulty"
                    },
                    {
                        "display_name": "Under 30 Minutes",
                        "id": 64472,
                        "name": "under_30_minutes",
                        "root_tag_type": "difficulty",
                        "type": "difficulty"
                    },
                    {
                        "display_name": "Brunch",
                        "id": 64484,
                        "name": "brunch",
                        "root_tag_type": "meal",
                        "type": "meal"
                    },
                    {
                        "display_name": "Snacks",
                        "id": 64491,
                        "name": "snacks",
                        "root_tag_type": "meal",
                        "type": "meal"
                    },
                    {
                        "display_name": "Food Processor",
                        "id": 65842,
                        "name": "food_processor",
                        "root_tag_type": "appliance",
                        "type": "appliance"
                    },
                    {
                        "display_name": "Meal Prep",
                        "id": 65853,
                        "name": "meal_prep",
                        "root_tag_type": "cooking_style",
                        "type": "cooking_style"
                    },
                    {
                        "display_name": "Spatula",
                        "id": 1247788,
                        "name": "spatula",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "Chef's Knife",
                        "id": 1280501,
                        "name": "chefs_knife",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "Cutting Board",
                        "id": 1280503,
                        "name": "cutting_board",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "Dry Measuring Cups",
                        "id": 1280507,
                        "name": "dry_measuring_cups",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "Measuring Spoons",
                        "id": 1280508,
                        "name": "measuring_spoons",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "Mixing Bowl",
                        "id": 1280510,
                        "name": "mixing_bowl",
                        "root_tag_type": "equipment",
                        "type": "equipment"
                    },
                    {
                        "display_name": "High-Protein",
                        "id": 8091917,
                        "name": "high_protein",
                        "root_tag_type": "healthy",
                        "type": "healthy"
                    },
                    {
                        "display_name": "Cuisine",
                        "id": 8757513,
                        "name": "cuisine",
                        "root_tag_type": "cuisine",
                        "type": "cuisine"
                    },
                    {
                        "display_name": "Appliance",
                        "id": 9295811,
                        "name": "appliance",
                        "root_tag_type": "appliance",
                        "type": "appliance"
                    },
                    {
                        "display_name": "Difficulty",
                        "id": 9295816,
                        "name": "difficulty",
                        "root_tag_type": "difficulty",
                        "type": "difficulty"
                    },
                    {
                        "display_name": "Sandwiches",
                        "id": 9299494,
                        "name": "sandwiches",
                        "root_tag_type": "meal",
                        "type": "lunch"
                    },
                    {
                        "display_name": "Chicken",
                        "id": 9299514,
                        "name": "chicken",
                        "root_tag_type": "meal",
                        "type": "dinner"
                    }
                ],
                "thumbnail_alt_text": "",
                "thumbnail_url": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/45b4efeb5d2c4d29970344ae165615ab/FixedFBFinal.jpg",
                "tips_and_ratings_enabled": true,
                "topics": [
                    {
                        "name": "Bread Lovers",
                        "slug": "bread"
                    },
                    {
                        "name": "Sunday Brunch",
                        "slug": "brunch"
                    },
                    {
                        "name": "Healthy Eating",
                        "slug": "healthy"
                    },
                    {
                        "name": "Low Carb Meals",
                        "slug": "low-carb-meals"
                    },
                    {
                        "name": "Weekend Meal Prep",
                        "slug": "meal-prep"
                    },
                    {
                        "name": "Romantic Dinners",
                        "slug": "romantic-dinners"
                    },
                    {
                        "name": "Snacks",
                        "slug": "snacks"
                    },
                    {
                        "name": "American",
                        "slug": "american"
                    }
                ],
                "total_time_minutes": null,
                "total_time_tier": {
                    "display_tier": "Under 30 minutes",
                    "tier": "under_30_minutes"
                },
                "updated_at": 1683237600,
                "user_ratings": {
                    "count_negative": 69,
                    "count_positive": 797,
                    "score": 0.9203233256351039
                },
                "video_ad_content": "none",
                "video_id": 73153,
                "video_url": "https://vid.tasty.co/output/121934/hls24_1546897597.m3u8",
                "yields": "Servings: 4"
            },
        
        ]}
//   content: 'Test Content',
};

// Mock function to simulate rendering with EJS
// function renderTemplate(data) {
//   return ejs.render(template, data);
// }
function renderTemplate(data) {
    // Adjust the path to your EJS template file inside the views folder
    const templatePath = 'views/home.ejs'; // Adjust this path accordingly
    const template = fs.readFileSync(templatePath, 'utf-8');
    const renderedOutput = ejs.render(template, data);
    const dom = new JSDOM(renderedOutput);
    return dom.window.document;
  }

// Jest test case
describe('EJS Template Rendering', () => {
    
  it('renders correctly with provided data', () => {
    const renderedOutput = renderTemplate(testData);
    const titleElement = renderedOutput.querySelector('h2');
    expect(titleElement.textContent).toBe(testData.title);

    
    console.log(renderedOutput)
    // Define your expectation here, for instance, you could check if certain content exists in the rendered output
    // expect(renderedOutput).toContain(testData.title);
    // expect(renderedOutput).toContain(testData.content);
  });
});