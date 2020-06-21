import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
scrollDowns=[
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg",title:"Business Cards"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-flyers.jpg",title:"Flyers"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-brochures.jpg",title:"Brochures"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-labels-stickers.jpg",title:"Labels & Stick"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-product-packaging.png",title:"Product Packaging"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-food-packaging.png",title:"Food Packaging"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-banners.png",title:"Banners"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-books.png",title:"Books"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-bottles-cans.png",title:"Bottles & Cans"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-clothing.png",title:"Clothing"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-displays.png",title:"Displays"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-newspapers-magazines.png",title:"Newspappers & Magazines"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-posters.png",title:"Posters"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-stationery.png",title:"Stationery"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-table-tents.png",title:"Table Tents"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-tickets.png",title:"Tickets"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-vehicles.png",title:"Vehicles"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-websites.png",title:"Websites"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-windows.png",title:"Windows"},
{image:"https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-giveaways.jpg",title:"Giveaways"}]
 

Companies=[
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Elle.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Bijou.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Blickle.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Sky.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Seal.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Monster.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_BBI.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Blaser.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Maklerei.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Investis.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Optimed.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Reclay.png'},
  {image:'https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Roemer.png'},
  {image:''},
  {image:''},
  {image:''},
  {image:''},
]

constructor() { }

  ngOnInit() {
  }

}
