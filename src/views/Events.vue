<template>
	<main>
		<div class="navcont">
			<br />
			<img src="/events.svg" />
			<br /><br />
			<!-- <h1 class="center titled akira">EVENTS</h1> -->
		</div>
		<div class="navcont header">
			<!-- <Event /> -->
			<div class="grid">
				<NewEvent v-for="e in events" :key="e?.event" :data="e" />
			</div>
			<br /><br /><br />
			<!-- <h1 class="titled center akira">Coming Soon.</h1> -->
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			events: [
                {
                    "category": "CSE",
                    "event": "Procon Jr.",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG4ag-gCx908g/feedshare-shrink_2048_1536/0/1691910824896?e=1695254400&v=beta&t=nNAsoqz7G3NTEADsSnTYFQD5caYDB1SE-bzWX-8rk-g",
                    "prize": "2 Bonus Points for IIITD Admissions",
                    "desc": "Unleash Your Coding Genius! Join Procon Jr, Esya's premier competitive programming showdown for school students. Gear up to conquer IOI-style challenges and compete against the nation's brightest minds. Plus, stand a chance to earn a head start with two bonus points for admission at Indraprastha Institute of Information Technology, Delhi through JAC process!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "",
                    "venue": "Online + Offline"
                },
                {
                    "category": "CSE",
                    "event": "ProSort Euler",
                    "image": "https://i.imgur.com/zk6Wgu0.jpeg",
                    "prize": 25000,
                    "desc": "Join us at IIITD for an exhilarating event - a Thrilling Math + Coding competition inspired by Project Euler. Challenge your problem-solving abilities by solving intricate mathematical problems using programming skills, all while racing against the clock. Stand a chance to win attractive prizes and seize the opportunity to establish valuable connections with like-minded individuals. Don't miss out on this chance to showcase your skills, expand your horizons, and make lasting connections.",
                    "link": "https://unstop.com/hackathons/procon-euler-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728754",
                    "venue": "Online"
                },
                {
                    "category": "CSE",
                    "event": "ProTrio",
                    "image": "https://media.licdn.com/dms/image/D4D22AQF72E6yX5ThDw/feedshare-shrink_2048_1536/0/1692091255917?e=1695254400&v=beta&t=b4d12tQ8vyuDQR-os1ntIgP5Vy5-LwF8O7izlZ_6CS4",
                    "prize": 40000,
                    "desc": "Ready to Code, Compete, Conquer! Join us for ProTrio, the ultimate ICPC-style event that takes you through thrilling online and offline phases.\nGear up to showcase your coding brilliance in the online challenge and secure your spot for the electrifying offline showdown. Teamwork and problem-solving will lead to victory!\nAre you up for the challenge?\n\nParticipate in the event during Esya'23 on 26th of August at IIITD. There is a preliminary stage for event which will take place in online mode on 19th August.",
                    "link": "https://unstop.com/p/protrio-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728752",
                    "venue": "Online + Offline"
                },
                {
                    "category": "CSE",
                    "event": "Slash",
                    "image": "https://media.licdn.com/dms/image/D4D22AQEFZdF_ms0W4w/feedshare-shrink_2048_1536/0/1691915242866?e=1695254400&v=beta&t=3KWcyLPxtLu7-m1ppF572J8HvHIZKL_TrW8E-xRZ5cI",
                    "prize": 50000,
                    "desc": "Dive into the depths of puzzling enigmas and unravel the mysteries that await in the labyrinth of Slash! Join us for an electrifying journey through the world of cryptic hunts and conundrums at Esya, where minds are challenged and mysteries are conquered.\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/slash-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728747",
                    "venue": "Online"
                },
                {
                    "category": "CSE",
                    "event": "h4ckc0n",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG-yXRQsNJmXw/feedshare-shrink_2048_1536/0/1691843801795?e=1695254400&v=beta&t=Ia5UCfQ9AlAB6TQkU50xKu_czDbd-gTvrfS0Tt_VtXQ",
                    "prize": 150000,
                    "desc": "Get ready for the ultimate hacking showdown at HackCon! Join d4rkc0de's flagship CTF Tournament and dive into challenges across 9 diverse categories, uniting hackers from around the globe. Embrace the evolution of hacker culture with every challenge. Let's redefine the digital frontier together!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://hackcon.in/",
                    "venue": "Hybrid"
                },
                {
                    "category": "CSE",
                    "event": "SteelMountain",
                    "image": "https://media.licdn.com/dms/image/D4D22AQFpKKf2V7Hhdw/feedshare-shrink_2048_1536/0/1691851826611?e=1695254400&v=beta&t=-GPMeaLAomWiGu9iEcuyVLbd-Ovpe6MBYqMmQcMKbw8",
                    "prize": 60000,
                    "desc": "Unleash your inner hacker with a twist of intrigue! Join us for an electrifying campus-wide adventure in our Mr. Robot-inspired CTF showdown. Teams of 3 will dive into a captivating story-driven challenge, racing to access hidden enigmas across the campus. Get ready to channel your inner hacker, unravel puzzles, and immerse yourself in the world of cybersecurity. Step into the shoes of a digital detective and master the art of thinking like a hacker. Are you up for the challenge?\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD",
                    "link": "https://unstop.com/p/steelmountain-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728725",
                    "venue": "Offline"
                },
                {
                    "category": "CSE",
                    "event": "BugSmash",
                    "image": "https://media.licdn.com/dms/image/D4D22AQHc5KaEcKaPJA/feedshare-shrink_2048_1536/0/1691848231722?e=1695254400&v=beta&t=cU1dA9NzJfOZnjqgJg6sWYtNwRyG07iqhag8kYpzcNs",
                    "prize": 60000,
                    "desc": "Dive into the virtual realm of #BugSmash! Unleash your inner cyber sleuth and join us for an adrenaline-pumping 6-hour marathon where sharp minds collide, vulnerabilities crumble, and bugs meet their match. Get ready to race against the clock and fellow programmers, as we embark on a mission to secure software landscapes and to assess vulnerabilities and fix bugs. So who will emerge as the ultimate bug-busting champion? Tune in and let the coding games begin!",
                    "link": "https://bugsmash.co.in",
                    "venue": "Online"
                },
                {
                    "category": "Math",
                    "event": "Perplexicon",
                    "image": "https://media.licdn.com/dms/image/D4D22AQEe273ffzUdvg/feedshare-shrink_2048_1536/0/1691940015396?e=1695254400&v=beta&t=Xebsi9qtnWQuktvnOyqLqfaM1qH781WIc3RCWh_oJhg",
                    "prize": 20000,
                    "desc": "Crack the Code of Curiosity at Preplexicon! Immerse yourself in a realm where math transform into a captivating puzzle. Embark on a journey through Preplexicon at ESYA, where intricate challenges and exhilarating rounds lie in wait. Seize the opportunity – enroll today to guarantee your place for an unforgettable escapade!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/perplexicon-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728751",
                    "venue": "Offline"
                },
                {
                    "category": "Math",
                    "event": "Zero-Prerequisite Tournament",
                    "image": "https://media.licdn.com/dms/image/D4D22AQHOkzsXsgUx2g/feedshare-shrink_2048_1536/0/1691923089309?e=1695254400&v=beta&t=LAtZJfjOysynKvsW4jNfSeV2klj-RZt0Anm71ZP1fkU",
                    "prize": 20000,
                    "desc": "Dive into the world of problem-solving with a twist – welcome to ZPT, where no prerequisites are needed, only your passion for puzzles! Join us for Zero Prerequisite Tournament, where each round uncovers a new layer of maths and computer science challenges. Are you ready to level up?\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/zpt-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728748",
                    "venue": "Offline"
                },
                {
                    "category": "ECE",
                    "event": "NexTech",
                    "image": "https://media.licdn.com/dms/image/D4D22AQEunMlYuD3Qgg/feedshare-shrink_2048_1536/0/1692080530740?e=1695254400&v=beta&t=LVyGe88ZSMPf5LQIf16uwHBj-YjlSYC4NOve7NhBvc8",
                    "prize": 20000,
                    "desc": "Diving into the Future of Hardware at NexTech Hackathon! Join us in pushing the boundaries of innovation and tech at this electrifying event.\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD!",
                    "link": "https://unstop.com/competitions/nextech-esya23-indraprastha-institute-of-information-technology-iiit-delhi-732139",
                    "venue": "Offline"
                },
                {
                    "category": "ECE",
                    "event": "RoboQuest - Fastest Line Follower",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG_h5lCLQhLRA/feedshare-shrink_2048_1536/0/1692101352603?e=1695254400&v=beta&t=SZS0moW0FiOd-H1K6Zez3OpSQohHb6Fy56gJeVotWfQ",
                    "prize": 15000,
                    "desc": "Dive into the realm of innovation at 'RoboQuest:' : Step into a world where cutting-edge technology meets innovation , Craft and fine-tune your very own autonomous robot within the specified dimensions, equipping it to conquer a challenging black line track fraught with paths.\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/roboquest-maze-solver-indraprastha-institute-of-information-technology-iiit-delhi-723732",
                    "venue": "Offline"
                },
                {
                    "category": "ECE",
                    "event": "Steel Smackdown: RoboWars",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG_NkpwFOsegg/feedshare-shrink_2048_1536/0/1691996860733?e=1695254400&v=beta&t=qcQDxgmyBMlncnYtPu_2bJEG6S00mRX7plHH77Xezyg",
                    "prize": 100000,
                    "desc": "Unleash the metal mayhem at Steel Smackdown! Design, battle, conquer – witness robots in a fierce showdown as they fight to dominate the arena. Will your bot seize victory or face defeat?\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/steel-smackdown-robowars-indraprastha-institute-of-information-technology-iiit-delhi-723532",
                    "venue": "Offline"
                },
                {
                    "category": "ECE",
                    "event": "SkyRush",
                    "image": "https://media.licdn.com/dms/image/D4D22AQGyIyYL9rdLxA/feedshare-shrink_2048_1536/0/1692094595339?e=1695254400&v=beta&t=ue5Z9i1qJWBmGGwceRu8EnAqJaBtWEI9TcFmdaV_RaI",
                    "prize": 40000,
                    "desc": "Let your creativity soar at SkyRush! Design, build, and conquer the skies as you navigate through a thrilling drone obstacle course. Showcase your engineering finesse, ace high-speed maneuvers, and climb the leaderboard to claim victory!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/skyrush-indraprastha-institute-of-information-technology-iiit-delhi-723733",
                    "venue": "Offline"
                },
                {
                    "category": "ECE",
                    "event": "TechnoKick - RoboSoccer",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG8VWCRqd8LhA/feedshare-shrink_2048_1536/0/1692078699277?e=1695254400&v=beta&t=XdBAInxye6s60P9nXBmygeDaETNsRITGDMUNVnpPfPA",
                    "prize": 20000,
                    "desc": "Kick Off with TechnoKick: The Ultimate Robo Soccer Showdown!\nGear up for a tech-packed football fiesta! Watch precision-engineered bots battle it out in a captivating arena. Feel the buzz of innovation and athletic flair collide as they chase goals and outscore rivals. Get ready to be amazed by the genius behind those specialized bot kicks!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/technokick-robosoccer-indraprastha-institute-of-information-technology-iiit-delhi-723765",
                    "venue": "Offline"
                },
                {
                    "category": "Hackathon",
                    "event": "Design 360",
                    "image": "https://media.licdn.com/dms/image/D5622AQFj20kJJNbTuQ/feedshare-shrink_2048_1536/0/1692483461449?e=1695254400&v=beta&t=BUJ--uNWdBVkEvLSOEPURv6yiMG7R_fAm3bTn5ZEqOI",
                    "prize": 30000,
                    "desc": "Calling all creative minds and design enthusiasts! Unleash your creativity, conquer challenges, and shine under pressure at Design 360! Join us as we craft stunning websites and apps within 24 hours, showcasing design thinking at its finest. Don't miss your chance to be part of this exhilarating journey. Register now and let your imagination run wild!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/design360-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728766",
                    "venue": "Offline"
                },
                {
                    "category": "Hackathon",
                    "event": "SpaceHack",
                    "image": "https://media.licdn.com/dms/image/D4D22AQEbOmru2p0hpg/feedshare-shrink_2048_1536/0/1691918615342?e=1695254400&v=beta&t=jgNU1bVac2qUWo_sYQkn_k_Dk6eJF37iuUN-wgAUd84",
                    "prize": 600000,
                    "desc": "Join SpaceHack's Cosmic Odyssey! Dive into space settlements with teams of five, fusing imagination and science. Let's shape a stellar future together, where creativity knows no bounds!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/hackathons/spacehack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728723",
                    "venue": "Offline"
                },
                {
                    "category": "Hackathon",
                    "event": "GameJam",
                    "image": "https://media.licdn.com/dms/image/D5622AQFdZo-BUOWMIQ/feedshare-shrink_2048_1536/0/1692512228786?e=1695254400&v=beta&t=wp2uiqQE6-twa250cK3MegxMXkuU6rvF_iVfUZrEElY",
                    "prize": 20000,
                    "desc": "Level Up Your Creativity! Join us for a thrilling 24-hour Game Jam experience at #ESYA2023, hosted by IIIT Delhi! Grab your partner and power up for a non-stop coding frenzy as teams of two battle the clock to craft mesmerizing games that will leave you awestruck. Who will rise as the ultimate game dev duo? Stay tuned for the epic showdown and brace yourselves for mind-blowing innovation!",
                    "link": "https://unstop.com/p/gamejam-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728763",
                    "venue": "Offline"
                },
                {
                    "category": "Hackathon",
                    "event": "HackCOG",
                    "image": "https://media.licdn.com/dms/image/D5622AQEwzHbqtmpu7w/feedshare-shrink_2048_1536/0/1692475667235?e=1695254400&v=beta&t=CeiAM72-HfGVTLzDxvc3fWudmqJsNWje9NshFoElv58",
                    "prize": 3000000,
                    "desc": "Join HackCOG, the ultimate cognitive computing & social sensing hackathon by Anubhuti Tech Innovation Hub, IIIT Delhi!\n\nCollaborate on challenges inspired by human thinking, solve societal issues, and win from a 30 Lakhs prize pool including grants under Chanakya and Prayas fellowship!\n\nConnect with tech enthusiasts and professionals, and make an impact on society through technology. Don't miss out!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/hackcog-esya23-indraprastha-institute-of-information-technology-iiit-delhi-733896",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "Esya's Kings Cup",
                    "image": "https://media.licdn.com/dms/image/D4D22AQHCbcNSeH07AA/feedshare-shrink_2048_1536/0/1691841287644?e=1695254400&v=beta&t=jPTvyl7DI-jInMEhD-VKccIlbbbzg3f5BV659kPNEAo",
                    "prize": 150000,
                    "desc": "Chess masters - this quickfire tournament is your chance to shine! Show your skills against fellow enthusiasts in intense 25-minute matches. With the clock ticking down, smart strategy is everything. Can you think fast and outwit opponents for tactical glory?\nEmbrace the competitive pressure and unlock your inner grandmaster!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/competitions/kings-cup-esya23-indraprastha-institute-of-information-technology-iiit-delhi-724360",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "HuntIT",
                    "image": "https://media.licdn.com/dms/image/D4D22AQF7oaObpOD3Wg/feedshare-shrink_2048_1536/0/1691833262064?e=1695254400&v=beta&t=-MwicIYSd8HAVpslGpuwlSOTws9NnVceimcZeHsD-WA",
                    "prize": 100000,
                    "desc": "Unearth secrets hidden deep, in Esya's hunt, the grand treasure to seek!\nGet ready to use your grey cells as you solve a series of complex and challenging hints to find treasure all over IIIT Delhi.\n\nParticipate in the event by IEEE IIIT-Delhi Student Branch in a team of 4-5 during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/huntit-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728122",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "Tech Talk",
                    "image": "https://media.licdn.com/dms/image/D4D22AQGt2EMWk-Thlw/feedshare-shrink_2048_1536/0/1692115056252?e=1695254400&v=beta&t=JTLAKWb2z6CgSOhTNNwpkr3ttYI5umTBSiJOjY6f9Uo",
                    "prize": 10000,
                    "desc": "\"Will meta humans help forming Civilization type - I? Will Musk defeat Zuckerberg in cage fight?\"\nWhat's a better forum than ESYA'S very own Group Discussion Event TECH TALK for such questions.\n\nJoin us on 26th August at IIITD, to be a part of thought provoking, intriguing discussion, and survive the elimination.",
                    "link": "https://unstop.com/competitions/techtalk-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728764",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "Debatathon - Debate event",
                    "image": "https://media.licdn.com/dms/image/D4D22AQFqsy2ypXjl2A/feedshare-shrink_2048_1536/0/1692190888892?e=1695254400&v=beta&t=XS1aK7eCRmt_ECxYNr9kGdddyYF_sU9r5AQzJXIuDeY",
                    "prize": 10000,
                    "desc": "Conquer at Debathon, a beginner-friendly debate! Where everyone gets a chance to speak and let your voice be heard.\nAfterall, THE NATION WANTS TO KNOW!!\n\nParticipate in the event during Esya'23 on 25th of August at IIITD.",
                    "link": "https://unstop.com/p/debathon-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728767",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "Speedcubing",
                    "image": "https://media.licdn.com/dms/image/D4D22AQG7DHI5W5pO_g/feedshare-shrink_2048_1536/0/1691829453453?e=1695254400&v=beta&t=ygw47EYVLBF-PPBE_I5AJVaRiQ2fivg50Y1cZjgHxHE",
                    "prize": 250000,
                    "desc": "Cubelelo.com brings to you Speedcubing ESYA 2023 - A grand speedcubing competition hosted at IIIT-Delhi, affiliated with the World Cube Association!\n\nCubelelo.com is India's #1 cubestore. It was founded in 2014 with a mission to provide a one-stop solution to all speed-cubing needs. Cubelelo is trusted and loved by 1 million+ cubers across the country, having 8+ years of experience in the speedcubing industry. They offer premium speedcubes, lubricants, tensioning tools, timers, stickers, guides, and more.\n\nParticipate in the event during Esya'23 on 25th and 26th August at IIITD.",
                    "link": "https://unstop.com/competitions/speedcubing-esya23-indraprastha-institute-of-information-technology-iiit-delhi-717493",
                    "venue": "Offline"
                },
                {
                    "category": "Non-Tech",
                    "event": "X-Grid",
                    "image": "https://media.licdn.com/dms/image/D5622AQHfSr29nBLvwg/feedshare-shrink_2048_1536/0/1692468968593?e=1695254400&v=beta&t=R4iKhm6v22vKfDyYmPCoyQo1SHSpJ8VA7uG_7y_27gs",
                    "prize": 30000,
                    "desc": "Unleash your tech-savvy wit at X-Grid, Esya's flagship crossword event! Teams pounce and bounce with clever cryptic clues to conquer the tech-themed grid. Get ready for brain-teasing fun!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/x-grid-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728765",
                    "venue": "Offline"
                },
                {
                    "category": "Quiz",
                    "event": "Fin-explicable and Biz-zarre Quiz",
                    "image": "https://media.licdn.com/dms/image/D4D22AQFz5-Gwhyup4w/feedshare-shrink_2048_1536/0/1692204409340?e=1695254400&v=beta&t=Pij1c-Et60hjl3OaFRk8Zeq0oaKV5AuQBQlO62MrP6I",
                    "prize": 7500,
                    "desc": "Don't tell me you're also obsessed with the latest financial innovations and blunders? Do you care about which businesses are going to go bankrupt next?\nThen rummage through Forbes' and Fortune's once more, and scroll infinitely through Bloomberg to prepare yourself for another win, at the FinBiz Quiz at Esya'23!\n\nSpoiler alert: This quiz can cause excessive serotonin. Attendee discretion is advised.\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/finbiz-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728771",
                    "venue": "Offline"
                },
                {
                    "category": "Quiz",
                    "event": "General Quiz",
                    "image": "https://media.licdn.com/dms/image/D5622AQEJblD-Eg5s6A/feedshare-shrink_2048_1536/0/1692250958246?e=1695254400&v=beta&t=xoGsZ-ju_HPF4CyKUAwH7tgfgUzJEL14Mf6uycB6bhI",
                    "prize": 7500,
                    "desc": "It's time to use your, ahem, submarines, to dive in the world of intriguing questions from literature, art, entertainment, pop, and much more.\nThis quiz guarantees an unforgettable experience in the realms of fun and knowledge.\nThis is the General (not Generic) Quiz.\n\nJust be careful; curiosity killed the cat!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/general-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728768",
                    "venue": "Offline"
                },
                {
                    "category": "Quiz",
                    "event": "Sci-Tech Quiz",
                    "image": "https://media.licdn.com/dms/image/D5622AQEESN_czfiqlA/feedshare-shrink_2048_1536/0/1692252676013?e=1695254400&v=beta&t=HKuFGGHTZc1YONpCAOTBmkY8O3drIcwlyXNbF-3Kv0o",
                    "prize": 7500,
                    "desc": "Using information from sources you never thought would be useful, come and mingle with our exhiliarating quiz, delving into the fascinating bubble of innovation, discovery, and exploration. Questions about tech advancements, physics and more are waiting to be answered!\nGet ready to be challenged, for this quiz will surely test you on multiple grounds.\nAnd remember, the bird has been killed; all that remains is X. Maybe this fact will come in handy? Who knows!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/p/scibiztech-quiz-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728772",
                    "venue": "Offline"
                },
                {
                    "category": "Research",
                    "event": "ML Wars",
                    "image": "https://media.licdn.com/dms/image/D5622AQFQizJp3INmRg/feedshare-shrink_2048_1536/0/1692527244903?e=1695254400&v=beta&t=Hv2_jfcBv7rKNbsX1LSD5BujgfjJQJliy-ud85VIG1w",
                    "prize": 15000,
                    "desc": "Discover the Future of AI: Welcome to ML WARS 2023! Where Learning Meets Prediction! Step into ML WARS: where students Master the art of predicting the unknown with ML WARS. Decode data patterns, foresee outcomes, and forge unbreakable bonds. Employ your prediction prowess and carve a legacy in the AI realm. Don't miss out – embrace the challenge, seize victory!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.\nTo register follow the link in bio.",
                    "link": "https://unstop.com/hackathons/ml-wars-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728756",
                    "venue": "Online"
                },
                {
                    "category": "Research",
                    "event": "QuAck",
                    "image": "https://media.licdn.com/dms/image/D4D22AQHwART5SE4aMw/feedshare-shrink_2048_1536/0/1691951149019?e=1695254400&v=beta&t=BxG3tVGAMmcG4TwDdjSlvIICvnypcBPwoMxHMm4esyA",
                    "prize": 50000,
                    "desc": "Embark on a mind-bending quantum adventure with Quack! Crack the code to Shor's Quantum Algorithm, unveiling the magic that could reshape cryptography forever. Unleash your curiosity, dive into captivating challenges and decode the quantum realm's potential, no prior knowledge required! Join us in unveiling the future of quantum tech disruption and explore the captivating world of cryptography!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.",
                    "link": "https://unstop.com/hackathons/quack-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728761",
                    "venue": "Offline"
                },
                {
                    "category": "Research",
                    "event": "Prompt Craft",
                    "image": "https://media.licdn.com/dms/image/D5622AQGqmvGNtGn_Fg/feedshare-shrink_2048_1536/0/1692537190402?e=1695254400&v=beta&t=-6NRdjwHJURi1BN_aXnNJRb4d_Thl-DEH9VyQHlbfVg",
                    "prize": 30000,
                    "desc": "Embark on an extraordinary journey at \"Prompt Craft\"! Unleash your creativity to awaken AI magic. Craft imaginative prompts, witness the synergy of minds and machines, and experience the fusion of innovation. Join us for an adventure like no other!\n\nParticipate in the event during Esya'23 on 25th and 26th of August at IIITD.\nTo register follow the link in bio.",
                    "link": "https://unstop.com/competitions/prompt-wars-esya23-indraprastha-institute-of-information-technology-iiit-delhi-728755",
                    "venue": "Offline"
                }
            ]
		}
	}
}
</script>

<style lang="scss" scoped>
.titled {
	margin-bottom: 0.75em;
	font-size: 10vw;
	padding: 2em 0;
}
.header {
	margin-top: 1em;
}

.grid {
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 3em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
