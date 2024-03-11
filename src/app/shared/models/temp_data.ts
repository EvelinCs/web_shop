import { FoodProduct, Product } from "./products";

//https://www.petshop.co.uk/

export let food: FoodProduct[] = [
    {id: '0', name: "Felix Soup Farm Collection With Beef, Chicken & Lamb Wet Cat Pouches", species: 'cat', price: 2.09, sale: 0, description: "Felix® Soup is an irresistible range of exciting recipes for your cat. We are sure your little rascal will love lapping up the delicious broth and getting his teeth stuck into the mouth-watering chunks. Each ready to pour pouch of Felix® Soup is the perfect size to fuel your cat's mischief at any time of day and, with no added artificial colourants, flavourings or preservatives, you can feel good about serving it. Add some delicious variety to your cat's day with the irresistible Felix® Soup recipes, the perfect complement to his diet.", brand: "Felix", rating: [0], weight: 288, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Felix-Soup-Farm-Collection-6-x-48g_1.png", lastTil: 100, available: 20},
    {id: '1', name: "Purina ONE Mini Fillets in Gravy Wet Cat Food Pouches", species: 'cat', price: 15.49, sale: 0, description: "Purina ONE Adult Mini Fillets in Gravy - contains: 10x mini fillets in gravy with lamb and carrots, 10x mini fillets in gravy with chicken and carrots, 10x mini fillets in gravy with ocean fish and green beans and 10x mini fillets in gravy with beef and carrots. Discover PURINA ONE wet meals with high quality ingredients, specially formulated by Purina vets & nutritionists to combine high quality nutrition with great taste. Rich in vitamins and minerals, these complete and balanced recipes of tender mini fillets and vegetables in a delicious gravy, provide targeted nutrition. With PURINA ONE, you can be sure you are giving her all she needs to help stay healthy today and tomorrow.", brand: "Purina ONE", rating: [0], weight: 3400, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Purina-ONE-Mini-Fillets-Wet-Cat-Food-in-Gravy-40-x-85g_1.jpg" , lastTil: 100, available: 20},
    {id: '2', name: "Sheba Soup Tuna Fillets Wet Cat Food Pouches", species: 'cat', price: 1.50, sale: 0, description: "Complementary Pet Food For Adult Cats. Sheba soup for cats is a classic recipe of delicately flaked morsels in a smooth, silky soup your cat will adore. Indulge your cat with Sheba Soup wet cat food; a novel Sheba dining experience to amaze your feline friend, time and time again. Cat soup in handy 40g Sheba Soup cat food pouches with Tuna Fillets for a fresh serving every time. A 100% Complete and Balanced wet cat food with no artificial colours or preservatives.", brand: "Sheba", rating: [0], weight: 160, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Sheba-Soup-Tuna-Fillets-4-Pack-40g_1.jpg" , lastTil: 100, available: 20},
    {id: '3', name: "Go Cat Chicken & Duck Dry Cat Food", species: 'cat', price: 19.69, sale: 0, description: "Our cats are natural explorers, alive to everything in their world. It's what makes them such fascinating members of the family and brings so much vitality to our home. That's why Purina® Experts have created Go-Cat® for adult cats: delicious quality cat food to nourish your explorer's endless interest in his world. Go-Cat® has been feeding cats with good, wholesome nutrition for decades. We fill millions of bowls and this honour comes with great responsibility. That's why Go-Cat® recipes are made with no added artificial colours, flavourings or preservatives. So you can keep feeding them the same tasty food they love and feel proud about it.", brand: "Go Cat", rating: [0], weight: 10000, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Go-Cat-Duck-Rabbit-Chicken-Dry-Cat-Food-10kg_1.png", lastTil: 100, available: 20},
    {id: '4', name: "Purina ONE Adult Salmon and Whole Grains Dry Cat Food", species: 'cat', price: 4.19, sale: 0, description: "Purina ONE Adult is specifically formulated to meet the complete nutritional needs of Adult cats (aged 1-7 years) who need a complete and balanced diet to help stay in the best of health. ACTILEA is a unique nutritional formula within PURINA ONE designed to help keep your cat's natural defences strong and to deliver a wave of positive effects to help support her health, so you can enjoy her visibly great condition knowing she's great on the inside too. Purina ONE with ACTILEA formula helps support your cat's healthy immune system today and tomorrow.", brand: "Purina ONE", rating: [0], weight: 800, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Purina-ONE-Adult-Salmon-and-Whole-Grains-Dry-Cat-Food-800g_1.png" , lastTil: 100, available: 20},
    {id: '5', name: "Autarky Adult Tasty White Fish and Potato Dry Dog Food", species: 'dog', price: 28.34, sale: 5, description: "The Autarky grain free recipie provides a healthy option for your active dog which is full of flavor. It is made with freshly prepared fish and carbohydrate-rich potato and sweet potato. This feed containes olive extract, green lipped mussels, marine algae and glucosmaine to care for joints. Prebiotics promote good digestive health and added vitamin  A helps to support the imune system, enabling you yo provice the best possible nutrition for your pet. It is suitable for adult dogs as a high protein diet and is preservative free without any artificial flavours or colours.", brand: "Autarky", rating: [0], weight: 12000, image: "https://www.burnhills.com/images/autarky-adult-tasty-white-fish-and-potato-dog-food-p3664-10073_medium.jpg", lastTil: 100, available: 20},
    {id: '6', name: "Skinner's Field & Trial Chicken & Rice Hypoallergenic Dry Dog Food", species: 'dog', price: 28.49, sale: 0, description: "Field & Trial Chicken & Rice is a complete dog food, specially developed and formulated to support active dogs who are regularly working at a moderate activity intensity. Field & Trial Chicken & Rice has been carefully developed to include a protein level of 22% and a fat level of 10% to support the energetic requirements of a range of active dogs, such as working gundogs, agility dogs and active pet dogs. With protein being provided from digestible chicken, to support muscle integrity and development, and fat to support moderate performance output, Field & Trial Chicken & Rice is an ideal choice for a range of dogs. These factors, along with rice supplying digestible carbohydrate as an energy source, means that Field & Trial Chicken & Rice constitutes a diet to support the day-to-day requirements of active dogs.", brand: "Skinner's", rating: [0], weight: 15000, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Skinners-Field-Trial-Chicken-Rice-Hypoallergenic-Dry-Dog-Food-15kg_1.png", lastTil: 100, available: 20},
    {id: '7', name: "Chudleys Working Crunch Dry Dog Food", species: 'dog', price: 20.49, sale: 0, description: "For working dogs that have an increased energy demand. A rich in chicken nugget, Working Crunch has been designed for feeding during the working season. The ration is enhanced with key vitamins, amino acids and trace nutrient levels as an aid to improve performance, stamina and recovery together with the added benefit of a coat conditioning package. Our unique blend of Mobility herbs is also added to the diet to nutritionally support the musculo-skeletal system.", brand: "Chudleys", rating: [0], weight: 14000, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Chudleys-Working-Crunch-Dry-Dog-Food-15kg_1.jpg?resizeid=5&resizeh=1200&resizew=1200", lastTil: 100, available: 20},
    {id: '8', name: "Autarky Adult Succulent Salmon Dry Dog Food", species: 'dog', price: 22.79, sale: 0, description: "The Autarky Succulent Salmon recipe provides a healthy option for your active dog which is full of flavor. Even the fussiest eaters will savour our Succulent Salmon recipe. A natural source of omega 3 fatty acids, these will help keep your dog's joints flexible, while the combination of fatty acids and B vitamins will keep their skin and coat in great condition.", brand: "Autarky", rating: [2, 3], weight: 12000, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Autarky-Adult-Succulent-Salmon-Dry-Dog-Food-12kg_1.png?resizeid=5&resizeh=1200&resizew=1200", lastTil: 100, available: 20},
    {id: '9', name: "Alpha Sensitive Chicken and Rice Dry Dog Food", species: 'dog', price: 23.49, sale: 0, description: "Alpha Sensitive is nutritionally formulated as a complete and balanced food to meet the needs of adult dogs with a sensitive digestive system. Alpha Sensitive has been nutriionally formulated with chicken & rice which are carefully cooked to help optimise digestion. It is a hypoallergenic and wheat gluten free food for adult dogs with dietary sensitivities.", brand: "Alpha", rating: [5, 4], weight: 15000, image: "https://www.petshop.co.uk/SCA%20Product%20Images/Alpha-Sensitive-with-Chicken-and-Rice-Dry-Dog-Food-15kg_1.jpg?resizeid=5&resizeh=1200&resizew=1200", lastTil: 100, available: 20},
];

export let product: Product[] = [
    {id: '0', name: "Catit Vesper Cubo Cat Furniture - Stone", species: 'cat', price: 69.99, sale: 0, description: "High-quality MDF with walnut laminate finish. Detachable side cover and cushions for swapping and easy cleaning. Thick memory-foam cushions. Sisal scratching mat. Perfect for relaxing, sleeping and hiding. Easy to clean.", brand: "Catit", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Catit-Vesper-Cubo-Cat-Furniture-Stone_1.jpg", available: 20},
    {id: '1', name: "Catit Play Circuit Ball Toy Replacement Scratch Pad", species: 'cat', price: 5.69, sale: 0, description: "It is the replacement part for Catit Play Circuit Ball Toy. Corrugated cardboard scratch pad. Scratching helps cats relax, stretch their muscles and spread their scent", brand: "Catit", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Catit-Play-Circuit-Ball-Toy-Replacement-Scratch-Pad_1.jpg", available: 20},
    {id: '2', name: "Catit Vesper High Base Cat Scratching Furniture - Oak", species: 'cat', price: 109.99, sale: 0, description: "Extra-long seagrass scratching post. Tall observation platform. High-quality MDF with oak-look laminate finish. Cozy cubed den with two entrances. Memory-foam cushions. Easy to clean. Replaceable parts available. Also available in walnut and black. More details below.", brand: "Catit", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Catit-Vesper-High-Base-Cat-Scratching-Furniture-Oak_1.jpg", available: 20},
    {id: '3', name: "Catit Vesper Minou Cat Furniture Scratcher", species: 'cat', price: 42.49, sale: 0, description: "Cosy hideout with two entrances, so your cat won’t feel cornered. High-quality MDF with oak-look laminate finish. Allows your cat to scratch to its heart’s delight! Comfortable memory-foam cushion. Meet Minou, our stylish bench scratcher and hideout in one. Your cat will love taking long, relaxing naps inside, and sharpening its claws on the rounded sisal exterior. This adorable piece of furniture is named after one", brand: "Catit", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Catit-Vesper-Minou-Cat-Furniture-Scratcher_1.jpg", available: 20},
    {id: '4', name: "Cat 'N' Scratch Playpost & Ball - 29 x 29 x 39cm", species: 'cat', price: 4.75, sale: 0, description: "Playpost Cat Scratcher with Sisal post, square base and hanging play ball with catnip and carpet base. Great fun for our feline friends and keeps claws healthy and trimmed. 29cm x 29cm x 39cm", brand: "Sharples", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Playpost-Cat-N-Scratch-Ball-29x29x39cm_1", available: 20},
    {id: '5', name: "Danish Design Black 2 In 1 Dog Coat", species: 'dog', price: 13.92, sale: 0, description: "Featuring a unique removable polar fleece liner, this Danish Design 2 in 1 dog coat in black, is suitable for both winter and the warmer months. The polar fleece liner can be added easily to the coat with velcro strips to provide extra warmth when needed, and also removed when desired, to create a light raincoat for your dog. With eleven sizes to choose from, finding the perfect fit for your pet has never been easier.", brand: "Danish Design", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Danish-Design-Black-2-In-1-Dog-Coat_1.jpg", available: 20},
    {id: '6', name: "ThunderShirt for Dogs - Grey", species: 'dog', price: 36.89, sale: 0, description: "ThunderShirt is the original, vet recommended, natural calming solution that helps reduce anxiety in dogs in a drug-free way. Like swaddling an infant, our dog anxiety vest's patented design applies gentle, constant pressure to calm all types of anxiety, fear, and over-excitement issues in dogs. The ThunderShirt is proven to be over 80% effective in reducing anxiety for fireworks, thunderstorms, separation anxiety, travel, vet visits, problem barking and more. Treat anxiety, fear, and over-excitement in style! You’ll love the ThunderShirt’s calming effect on your dog.", brand: "ThunderShirt", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/ThunderShirt-for-Dogs-Grey_1.jpg", available: 20},
    {id: '7', name: "Country Dog Heavy Duty Rectangular Waterproof Softee Beds", species: 'dog', price: 83.76, sale: 0, description: "The ideal dog bed for Country Dogs who get wet and dirty on a regular basis. Covered in a heavy duty hard wearing 100% polyester waterproof material which is easy to keep clean, brush off loose dirt, wipe with a wet cloth and then rinse under a running tap / hose or even a low setting on a pressure washer. Designed to keep your pet warm & comfortable. The thick base cushion (removable for easy separate cleaning) and the high walls of this bed are filled with bonded Thermal Polyester Fibre to insulate your pet from the cold floor and keep it out of draughts.", brand: "P L Superior Pet Beds", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Country-Dog-Heavy-Duty-Rectangular-Waterproof-Softee-Beds_Brown-88cm-RWSOFTJBR.jpg", available: 20},
    {id: '8', name: "Self Cooling Pet Mat for Medium Sized Dogs - 50cm x 40cm", species: 'dog', price: 6.41, sale: 0, description: "This Medium Pet Cooling Mat automatically cools down when a pet sits on it and is perfect for keeping dogs cool during warm summer months. The self cooling pet mat helps to regulate body temperature by using a safe and non-toxic internal gel without the need for electricity, water or refrigeration. Water resistant and easy to clean. Suitable for dogs up to 25kg.", brand: "Kingdom", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/Cooling-Pet-Mat-Medium_1.jpg", available: 20},
    {id: '9', name: "Bone Shaped High Visibility Pet Safety Flasher for Collars", species: 'dog', price: 2.39, sale: 0, description: "This battery operated Hi-visibility Pet Safety Flasher easily clips onto dog collars to produce a bright flashing light that can be visible for up to 1/2 mile. Your dog doesn't always want to go for a walk in the daylight, so for those times where you are strolling in bad light conditions, or in the dark, don't be without this very handy flasher. An essential for the winter months. Each pet flasher is water resistant and contains two bright LEDs that once activated, will flash to help keep pets safe when walking and exercising. Suitable for all pets.", brand: "Kingdom", rating: [0], image: "https://www.petshop.co.uk/SCA%20Product%20Images/High-Visibility-Pet-Safety-Flasher-for-Collars_1.jpg", available: 20},
];
