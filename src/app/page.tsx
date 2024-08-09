import Typography from "./components/typography/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8 space-y-6">
      <Typography variant="body">
        Witaj! Dziękuję za chęć wzięcia udziału w badaniu nowego podtypu CAPTCHA
        opartego o piktogramy.{" "}
      </Typography>
      <Typography variant="body">
        Bardziej szczegółowe informacje na temat pracy magisterskiej, która
        opiera się o ten projekt, znajdziesz w zakładce{" "}
        <Link href="/info" className="text-primary">
          Informacje
        </Link>
        .
      </Typography>
      <Typography variant="subheader">Krok 1: Rozwiąż CAPTCHA</Typography>
      <Typography variant="body">
        Zostaną Ci zaprezentowane trzy testy CAPTCHA, realizujące nową metodę.
        Twoim zadaniem jest rozwiązać je, zwracając szczególną uwagę na jakość
        swojego doświadczenia. Staraj się rozwiązywać je w taki sposób, w jaki
        podchodzisz do standardowych testów CAPTCHA, które możesz znaleźć w
        Internecie.
      </Typography>
      <Typography variant="body">
        Ta część badania zajmie Ci maksymalnie kilka minut.
      </Typography>
      <Typography variant="subheader">Krok 2: Wypełnij formularz</Typography>
      <Typography variant="body">
        Po zakończonym sukcesem rozwiązaniu kodów autoryzacji, zostanie
        wyświetlony link do formularza. Wypełnij go, by zakończyć badanie.
        Formularz możesz znaleźć też w zakładce{" "}
        <Link href="/info" className="text-primary">
          Informacje
        </Link>
        .
      </Typography>
      <Typography variant="body">
        Ta część badania zajmie Ci maksymalnie dziesięć minut.
      </Typography>
      <Typography variant="subheader" className="text-center">
        <Link href="/study" className="text-primary">
          Rozpocznij badanie {">"}
          {">"}
        </Link>
      </Typography>
    </div>
  );
}
