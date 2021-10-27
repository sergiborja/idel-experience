import { Component, OnInit, HostListener } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
    selector: "app-blog-details",
    templateUrl: "./blog-details.component.html",
    styleUrls: ["./blog-details.component.scss"],
})
export class BlogDetailsComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {}

    public expKey: string;

    public experiences = ["trees", "london", "toros", "nuevo-lujo", "Africa"];

    @HostListener("window:popstate", ["$event"])
    onPopState() {
        setTimeout(() => {
            this.expKey = this.route.snapshot.params["expKey"];
        }, 20);
    }

    ngOnInit() {
        this.expKey = this.route.snapshot.params["expKey"];
    }

    public goToPrevExp() {
        let routeToNavigate: string;

        const idx = this.experiences.findIndex((exp) => this.expKey == exp);

        if (idx == 0) {
            routeToNavigate = this.experiences[this.experiences.length - 1];
        } else {
            routeToNavigate = this.experiences[idx - 1];
        }

        this.router.navigate([`blog-details/${routeToNavigate}`]);

        this.expKey = routeToNavigate;
    }

    public goToNextExp() {
        let routeToNavigate: string;

        const idx = this.experiences.findIndex((exp) => this.expKey == exp);

        if (idx == this.experiences.length - 1) {
            routeToNavigate = this.experiences[0];
        } else {
            routeToNavigate = this.experiences[idx + 1];
        }

        this.router.navigate([`blog-details/${routeToNavigate}`]);

        this.expKey = routeToNavigate;
    }

    public blogSlides: OwlOptions = {
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        items: 1,
        autoHeight: true,
        smartSpeed: 750,
        autoplay: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
    };

    public treesSrc = [
        "../../../assets/img/experiencias/entre-arboles/cabana16cabanapancho15_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanadosinda1024_14.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanadosinda1024_6.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe11_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe13_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe6_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanregopipe1_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanadosinda1024_11.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanadosinda1024_4.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanadosinda1024_8.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe12_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe4_1024.jpg",
        "../../../assets/img/experiencias/entre-arboles/cabanaregopipe8_1024.jpg",
    ];

    public africaSrc = [
        "../../../assets/img/experiencias/Africa/adventure-safaris.jpg",
        "../../../assets/img/experiencias/Africa/exibid_1.jpg",
        "../../../assets/img/experiencias/Africa/exibid_11a.jpg",
        "../../../assets/img/experiencias/Africa/exibid_37.jpg",
        "../../../assets/img/experiencias/Africa/exibid_685.jpg",
        "../../../assets/img/experiencias/Africa/exibid_880.jpg",
        "../../../assets/img/experiencias/Africa/exibid_k31.jpg",
        "../../../assets/img/experiencias/Africa/exibid_r15.jpg",
        "../../../assets/img/experiencias/Africa/exibid_1057.jpg",
        "../../../assets/img/experiencias/Africa/exibid_304.jpg",
        "../../../assets/img/experiencias/Africa/exibid_60.jpg",
        "../../../assets/img/experiencias/Africa/exibid_754.jpg",
        "../../../assets/img/experiencias/Africa/exibid_k17.jpg",
        "../../../assets/img/experiencias/Africa/exibid_k9.jpg",
        "../../../assets/img/experiencias/Africa/exibid_r17.jpg",
    ];

    public londonSrc = [
        //"../../../assets/img/experiencias/london/COCHES LONDRES EXPERIENCIA 1[3630].jpeg",
        "../../../assets/img/experiencias/london/COCHES LONDRES EXPERIENCIA 3[3633].jpeg",
        "../../../assets/img/experiencias/london/COCHES LONDRES EXPERIENCIA 7[3632].jpeg",
        "../../../assets/img/experiencias/london/COCHES LONDRES EXPERIENCIA 2[3634].jpeg",
        "../../../assets/img/experiencias/london/COCHES LONDRES EXPERIENCIA 4[3631].jpeg",
    ];

    public newLuxSrc = [
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8484.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8487.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8489.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8491.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8494.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8497.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8505.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8486.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8488.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8490.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8493.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8495.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/IMG_8502.jpg",
        "../../../assets/img/experiencias/nuevo-lujo/mesapuesta.jpeg",
    ];

    public torosSrc = [
        "../../../assets/img/experiencias/toros/ExperienciaTaurina.jpg",
        "../../../assets/img/experiencias/toros/IMG_7714.jpg",
        "../../../assets/img/experiencias/toros/IMG_7722.jpg",
        "../../../assets/img/experiencias/toros/e49ad1ff-7457-4486-86f4-b51d51d8d863.jpg",
        "../../../assets/img/experiencias/toros/IMG_7710.jpg",
        "../../../assets/img/experiencias/toros/IMG_7715.jpg",
        "../../../assets/img/experiencias/toros/IMG_7724.jpg",
        "../../../assets/img/experiencias/toros/IMG_7712.jpg",
        "../../../assets/img/experiencias/toros/IMG_7716.jpg",
        "../../../assets/img/experiencias/toros/bf1d957f-a59f-4c6b-93e9-0e23ccbd6c70.jpg",
    ];
}
