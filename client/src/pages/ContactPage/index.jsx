import SiteLayout from "layouts/SiteLayout";
import Wallpaper from "layouts/partials/Wallpaper";
import ContactForm from "./ContactForm";
import Map from "./Map";

const ContactPage = () => {
  return (
    <SiteLayout>
      <Wallpaper page="CONTACT" />
      <ContactForm />
      <Map />
    </SiteLayout>
  )
}

export default ContactPage