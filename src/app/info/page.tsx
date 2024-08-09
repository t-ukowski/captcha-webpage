import React from "react";
import Typography from "../components/typography/Typography";

const Info = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8 space-y-6">
      <Typography variant="subheader">O autorze</Typography>
      <Typography variant="body">
        Jestem studentem Informatyki na Wydziale Informatyki Akademii
        Górniczo-Hutniczej w Krakowie. Obecnie zajmuję się przygotowaniem pracy
        magisterskiej "Analiza metod weryfikacji CAPTCHA opartych o zastosowania
        piktogramów". Ta strona internetowa i dostępne na niej badanie są
        finalnym elementem tego procesu.
      </Typography>
      <Typography variant="subheader">Cel pracy</Typography>
      <Typography variant="body">
        Tworzona praca magisterska ma dwa cele. Po pierwsze, pragnę przybliżyć i
        zarysować obecny stan rynku kodów autoryzacji CAPTCHA, używane
        technologie, znane zagrożenia i problemy. Analizując dotychczasową
        literaturę i postęp w rozwoju takich rozwiązań, jesteśmy w stanie
        wskazać niszę, w której istnieje pole do nietrywialnej innowacji. Drugim
        celem tej pracy jest właśnie przygotowanie takiego nowego rozwiązania i
        poddanie go szczegółowej analizie, by określić, jak bardzo jest
        przydatne.
      </Typography>
      <Typography variant="body">
        Moim pomysłem jest test CAPTCHA oparty o wykorzystanie piktogramów i
        interaktywnego układania brakujących elementów. O zaletach takiego
        rozwiązania, szczególnie pod względem bezpieczeństwa, długo by mówić -
        najważniejsze, że jest to koncept z potencjałem i ten potencjał będzie
        zmierzony za pomocą udostępnionego tu badania.
      </Typography>
      <Typography variant="subheader">Formularz badania</Typography>
      <Typography variant="body">
        Jeśli badanie CAPTCHA zostało już przeprowadzone, ale chcesz wrócić do
        formularza, znajdziesz go pod tym linkiem:
      </Typography>
      <Typography variant="body">
        <a href="https://forms.gle/7yGQrpEGwEjREz1o6" className="text-primary">
          Formularz {">"}
          {">"}
        </a>
      </Typography>
    </div>
  );
};

export default Info;
