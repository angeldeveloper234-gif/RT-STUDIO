import { 
  PencilRuler, 
  HardHat, 
  BrickWall, 
  DraftingCompass, 
  Home, 
  ClipboardCheck 
} from 'lucide-react';
import { Service, Testimonial, ProjectImage, ContactInfo } from './types';

export const BUSINESS_NAME = "RT Studio ADI";
export const TAGLINE = "Arquitectura, Diseño e Ingeniería";

export const CONTACT_INFO: ContactInfo = {
  address: "San Andrés 24B, San Andrés, Fovissste, 73816 Teziutlán, Puebla, México",
  phone: "522311416738",
  phoneDisplay: "+52 231 141 6738",
  email: "rtstudio.adi@gmail.com",
  hours: ["Lunes a Viernes: 9:00 AM - 6:00 PM", "Sábado: 9:00 AM - 2:00 PM"],
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1568289467614!2d-97.3589416!3d19.8333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUwJzAwLjAiTiA5N8KwMjEnMzIuMiJX!5e0!3m2!1ses-419!2smx!4v1625600000000!5m2!1ses-419!2smx" 
  // Using a generic coordinate embed near Teziutlán based on address for safety if specific CID isn't found.
};

export const SERVICES: Service[] = [
  {
    title: "Diseño Arquitectónico",
    description: "Creación de espacios funcionales y estéticos adaptados a tus necesidades y estilo de vida.",
    icon: PencilRuler
  },
  {
    title: "Proyectos Ejecutivos",
    description: "Planos detallados, especificaciones técnicas y documentación completa para la ejecución de obra.",
    icon: DraftingCompass
  },
  {
    title: "Construcción",
    description: "Materializamos el proyecto con los más altos estándares de calidad y supervisión técnica.",
    icon: HardHat
  },
  {
    title: "Ingeniería Estructural",
    description: "Cálculo y diseño estructural para garantizar la seguridad y estabilidad de tu edificación.",
    icon: BrickWall
  },
  {
    title: "Remodelaciones",
    description: "Transformación integral de espacios existentes para modernizarlos y optimizar su uso.",
    icon: Home
  },
  {
    title: "Asesoría Técnica",
    description: "Consultoría experta para la toma de decisiones en proyectos de inversión inmobiliaria.",
    icon: ClipboardCheck
  }
];

export const GALLERY_IMAGES: ProjectImage[] = [
  { url: "https://lh3.googleusercontent.com/p/AF1QipMzp0O5A_YYENEfT4VjWt28MgveQbutxaL1ZPc=w203-h253-k-no", alt: "Proyecto Residencial Vertical" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipMzp0O5A_YYENEfT4VjWt28MgveQbutxaL1ZPc=s542-k-no", alt: "Detalle Fachada Moderna" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipNtyNM96Ok-9MlPt-pG7dulrV2w6sE11HBlpp0=w203-h114-k-no", alt: "Interiores Sala" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipMeZeHsEdp9wVikzI9Kiqgk8id29orWOkPcAWE=w203-h203-k-no", alt: "Render Arquitectónico" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipMeZeHsEdp9wVikzI9Kiqgk8id29orWOkPcAWE=s325-k-no", alt: "Diseño de Iluminación" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipNEyEyUXNHquABsNFRrb_o71se2D3x3ScrTnvg=w203-h114-k-no", alt: "Estructura en Proceso" },
  { url: "https://lh3.googleusercontent.com/p/AF1QipPc0v796f1YlEoS4v2trfnNwzsdJH1dmfyGHnM=w203-h360-k-no", alt: "Acabados de Lujo" },
  { url: "https://scontent.fcnq2-1.fna.fbcdn.net/v/t51.82787-15/520462521_18004933025792701_164626484163362813_n.webp", alt: "Vista Aérea Proyecto" },
  { url: "https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/490299909_719942063744975_6182278266473199077_n.jpg", alt: "Fachada Principal" },
  { url: "https://scontent.fcnq2-2.fna.fbcdn.net/v/t39.30808-6/488259724_714628957609619_3947116183834470758_n.jpg", alt: "Diseño Interior Moderno" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ivonne Ventura",
    comment: "Excelente atención y servicio 💯",
    rating: 5,
    imageUrl: "" // No URL provided for profile, will use initial
  },
  {
    name: "Marcos Ruiz",
    comment: "Gran profesionalismo en todo el proceso. Desde el diseño inicial hasta la ejecución, el equipo mostró un compromiso excepcional con la calidad y los tiempos de entrega. Totalmente recomendado para proyectos comerciales.",
    rating: 5,
  },
  {
    name: "Eduardo Garcia",
    comment: "Muy satisfecho con el proyecto ejecutivo que realizaron para mi casa. La atención personalizada y la capacidad técnica para resolver retos estructurales me dieron mucha confianza.",
    rating: 5,
  }
];