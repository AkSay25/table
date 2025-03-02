import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {

  fruits = [
    { name: "Apple", benefits: "Rich in fiber, good for heart health." },
    { name: "Banana", benefits: "High in potassium, provides instant energy." },
    { name: "Orange", benefits: "Boosts immunity, rich in vitamin C." },
    { name: "Mango", benefits: "High in antioxidants, improves skin health." },
    { name: "Strawberry", benefits: "Good for heart health, rich in antioxidants." }
  ];

   vegetables = [
    { name: "Carrot", benefits: "Good for eyesight, high in beta-carotene." },
    { name: "Spinach", benefits: "Rich in iron, boosts immunity." },
    { name: "Broccoli", benefits: "Helps in detoxification, rich in fiber." },
    { name: "Tomato", benefits: "Good for skin, contains lycopene." },
    { name: "Cucumber", benefits: "Hydrating, helps in digestion." }
  ];

   dryFruits = [
    { name: "Almond", benefits: "Boosts brain function, good for heart health." },
    { name: "Walnut", benefits: "Rich in Omega-3, improves memory." },
    { name: "Cashew", benefits: "Good for bone health, rich in magnesium." },
    { name: "Pistachio", benefits: "Lowers cholesterol, high in protein." },
    { name: "Dates", benefits: "Boosts energy, improves digestion." }
  ];

   herbalTeas = [
    { name: "Green Tea", benefits: "Boosts metabolism, rich in antioxidants." },
    { name: "Chamomile Tea", benefits: "Reduces stress, aids sleep." },
    { name: "Peppermint Tea", benefits: "Soothes digestion, relieves headaches." },
    { name: "Ginger Tea", benefits: "Boosts immunity, reduces nausea." },
    { name: "Hibiscus Tea", benefits: "Lowers blood pressure, supports liver health." }
  ];

   spices = [
    { name: "Turmeric", benefits: "Anti-inflammatory, boosts immunity." },
    { name: "Cinnamon", benefits: "Regulates blood sugar, rich in antioxidants." },
    { name: "Black Pepper", benefits: "Improves digestion, enhances nutrient absorption." },
    { name: "Ginger", benefits: "Reduces nausea, fights infections." },
    { name: "Clove", benefits: "Good for oral health, relieves pain." }
  ];

}
