import { HeaderService } from "../../header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-book-appointment",
  templateUrl: "./book-appointment.component.html",
  styleUrls: ["./book-appointment.component.css"],
})
export class BookAppointmentComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Book Appointment",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
