function letConstExemple(): void {
  let nb: number = 10;
  let nb2: number = 20;
  let prenom: string = "John d'Italie";
  let nom: string = 'Doe d"Espagne';
  let surnom: string = `mon prénom est ${prenom} et mon nom est ${nom}`;

  console.log(surnom);

  if (nb > 2) {
    const nb3: number = 30;
    // nb = "moguy";
    console.log(nb2);
    console.log(nb3);
  }
  // console.log(nb3);
}

letConstExemple();
