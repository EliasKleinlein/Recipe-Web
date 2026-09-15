export const MASTER_TIPS: Array<[string, string]> = [
  ["Schweinehaxe", "Die Kruste muss richtig knacken. Wenn sie leise ist, war der Build noch nicht fertig."],
  ["Debugger-Bolognese", "Die Soße ruhig lange köcheln lassen – Geschmack braucht manchmal genauso viel Geduld wie Debugging."],
  ["Merge-Conflict", "Die Schichten sauber aufbauen. Bei Lasagne wollen wir ausnahmsweise keine Merge-Konflikte."],
  ["Stack Overflow", "Kartoffeln weich kochen, aber den Topf nicht bis zum letzten Byte füllen."],
  ["Boolean-Beast", "Das Patty erst wenden, wenn es sich sauber löst. Gewalt ist kein gültiger Boolean."],
  ["Commit-Crash", "Currypaste kurz anrösten und erst danach die Flüssigkeit dazugeben. Erst testen, dann committen."],
  ["Stable Release", "Käsekuchen langsam abkühlen lassen. Ein stabiler Release mag keine hektischen Temperaturwechsel."],
  ["Dark Mode Deluxe", "Schokolade und Kirschen erst zusammenbringen, wenn beide Komponenten sauber vorbereitet sind."],
  ["Dark Mode", "Je dunkler die Schokolade, desto überzeugender der Dark Mode."],
  ["Runtime Error", "Brownies lieber etwas zu früh aus dem Ofen holen. Trocken ist kein Feature."],
  ["Promise-All", "Die Pancakes erst wenden, wenn oben mehrere Bläschen gleichzeitig sichtbar sind."],
  ["While-Schleife", "Den Wrap fest einschlagen – aber bitte keine Endlosschleife daraus machen."],
  ["Not Found", "Kekse nach dem Backen kurz auf dem Blech ruhen lassen. Sonst sind sie schneller Not Found als geplant."],

  ["Server-Load", "Den Schweinebraten langsam schmoren lassen. Hohe Last verträgt er, hektische Temperaturwechsel weniger."],
  ["Bugfix-Rahm", "Pilze richtig kräftig anbraten, bevor die Sahne dazukommt. Sonst fehlt dem Bugfix die Röstaromatik."],
  ["Compile-Kruste", "Beim Zwiebelbrot darf die Kruste kräftig werden – innen soll der Build trotzdem weich bleiben."],
  ["Syntax-Garden", "Rosmarin, Salz und gutes Olivenöl sind hier die wichtigste Syntax."],
  ["Sweet Commit", "Die Äpfel gleichmäßig verteilen – dann sieht der Commit nicht nur gut aus, sondern backt auch gleichmäßig."],

  ["Stream-Buffer", "Lachs lieber eine Minute zu früh vom Herd nehmen. Die Restwärme erledigt den letzten Commit."],
  ["Clean-Code-Kruste", "Die Kruste goldbraun backen, aber den Kabeljau darunter nicht trocken refactoren."],
  ["Garnelenpfanne", "Garnelen nur kurz und heiß braten. Sobald sie durchgehend fest werden, ist der Hotfix fertig."],
  ["Async-Await", "Beim Risotto Brühe nach und nach zugeben. Async ja – aber bitte auf jede Portion warten."],
  ["Green Merge", "Gemüse nicht totgaren. Ein Green Merge soll schließlich noch Farbe haben."],
  ["Open Source", "Gewürze zuerst kurz mitrösten. So geben sie mehr Aroma an das Curry frei."],
  ["Long-Term-Support", "Dem Bauernbrot genug Gehzeit geben. LTS braucht Stabilität, keine Abkürzungen."],
  ["Pull Request", "Knoblauchbrot erst kurz vor Schluss kräftiger bräunen – sonst wird der Pull Request bitter."],
  ["Fresh Release", "Zitronenabrieb bringt mehr Aroma als zu viel Saft. Fresh Release heißt frisch, nicht sauer."],
  ["Layer Stack", "Beim Tiramisu die Schichten sauber setzen und danach lange genug kalt stellen."],

  ["Nested Loop", "Rouladen fest rollen und langsam schmoren. Nested Loops brauchen manchmal einfach Zeit."],
  ["Wrapper Function", "Das Cordon Bleu sauber verschließen, damit der Käse nicht aus dem Wrapper läuft."],
  ["Ofengemüse", "Gemüse möglichst gleich groß schneiden. Dann erreicht alles gleichzeitig den fertigen State."],
  ["Legacy Code", "Linseneintopf langsam köcheln lassen. Manche alten Systeme werden mit Zeit einfach besser."],
  ["Layered Stack", "Kartoffeln dünn und gleichmäßig schichten. Der Stack darf groß sein, aber nicht chaotisch."],
  ["Stable Branch", "Roggenbrot vollständig auskühlen lassen, bevor du es anschneidest. Ein stabiler Branch braucht Ruhe."],
  ["Hot Reload", "Käse erst kurz vor dem Backen auf die Brötchen. Dann kommt der Hot Reload wirklich heiß."],
  ["Golden Release", "Käsekuchen langsam auskühlen lassen – die goldene Oberfläche soll nicht reißen."],
  ["Recursive Crunch", "Die Streusel nur locker verteilen. Crunch funktioniert besser ohne festes Zusammenpressen."],
  ["Dark Theme", "Die Mousse vorsichtig unterheben. Luftigkeit lässt sich später nicht nachinstallieren."],

  ["Kung Pao", "Den Wok richtig heiß machen und das Hähnchen portionsweise anbraten – sonst hängt der Event Loop."],
  ["Mapo Tofu", "Den Tofu vorsichtig unterheben. Hot Module Reload heißt nicht, dass wir ihn zerlegen müssen."],
  ["Sweet & Sour", "Die süß-saure Soße erst ausbalancieren und das knusprige Fleisch ganz zum Schluss hineingeben."],
  ["Beef & Broccoli", "Das Rind sehr heiß und sehr kurz braten. Clean Architecture braucht klare Grenzen."],
  ["Dan Dan", "Die Nudeln direkt mit der Sauce vermengen. Dependency Injection muss bis in jede Nudel kommen."],
  ["Fried Rice", "Für gebratenen Reis unbedingt kalten Reis verwenden. Frischer Reis blockiert die Async Queue."],
  ["Wontons", "Nicht zu viel Füllung verwenden. Ein Wrapped Component muss sich noch schließen lassen."],
  ["Frühlingsrollen", "Die Füllung vor dem Rollen abkühlen lassen. Lazy Loading ja – durchweichter Teig nein."],
  ["Char Siu", "Das Fleisch während des Röstens mehrfach glasieren. Genau dadurch bekommt der Red Build seinen Glanz."],
  ["Gebratene Eiernudeln", "Nudeln nur knapp vorgaren. Der eigentliche Merge passiert erst im heißen Wok."],

  ["Cannabis-Brownies", "Malte, bei diesem Rezept überlasse ich die Code-Review lieber Christophus."],

  ["Caesar-Salat", "Das Dressing wirklich selbst mixen – beim Caesar entscheidet die Sauce über den gesamten Build."],
  ["Griechischer Salat", "Tomaten und Gurken nicht zu klein schneiden. Ein Bauernsalat darf ruhig Struktur zeigen."],
  ["Quinoa-Avocado", "Quinoa vollständig auskühlen lassen, bevor die Avocado dazukommt – sonst wird der Green Build unnötig weich."],
  ["Ziegenkäse-Salat", "Den Ziegenkäse nur kurz erwärmen. Er soll cremig werden und nicht aus seinem eigenen Deployment laufen."],
  ["Gurkensalat", "Die Gurken kurz im Dressing ziehen lassen – dann bekommt auch die Cool Runtime ordentlich Geschmack."],
  ["Couscous-Salat", "Tahini erst mit Zitrone verrühren und dann Wasser ergänzen. Nicht erschrecken, wenn es kurz dick wird."],
  ["Kartoffelsalat", "Das Dressing über die noch warmen Kartoffeln geben. Genau dann nehmen sie den Refactor am besten an."],
  ["Rote-Bete-Feta", "Feta erst am Ende darübergeben, damit aus dem Red Branch kein komplett rosa Repository wird."],
  ["Kichererbsen-Salat", "Kichererbsen gründlich abtropfen lassen. Wasser ist hier eine unnötige Dependency."],
  ["Pasta-Pesto-Salat", "Pesto nicht auf heiße Pasta geben – Basilikum verliert sonst Farbe und der Fresh Commit wird grau."],


  ["Bauernbrot", "Kruste kräftig ausbacken und das Brot vollständig auskühlen lassen. Ein Stable Branch wird nicht zu früh angeschnitten."],
  ["Laugenbrötchen", "Die Brötchen nur kurz laugen und anschließend sofort backen. Der Backend Batch wartet nicht gern."],
  ["Focaccia", "Beim Eindrücken der Mulden ruhig bis fast zum Boden gehen. Dort sammelt sich der Olive Commit."],
  ["Zwiebelbrot", "Die Zwiebeln vor dem Einkneten vollständig abkühlen lassen. Sonst kollabiert die Layered Architecture."],
  ["Knoblauch-Kräuter-Baguette", "Kräuterbutter erst kurz vor dem Backen einarbeiten. Der Garlic Patch soll frisch bleiben."],
  ["Vollkornbrötchen", "Die Kerne leicht anfeuchten, damit sie beim Production Build zuverlässig am Brötchen bleiben."],
  ["Ciabatta", "Den weichen Teig möglichst wenig entgasen. Die Async Fermentation hat diese Luftblasen hart erarbeitet."],
  ["Käse-Schinken-Hörnchen", "Die Füllung nicht bis an den Rand legen, damit der Wrapped Component beim Backen geschlossen bleibt."],
  ["Pizza Bianca", "Mozzarella gut abtropfen lassen. Im White Theme brauchen wir keine unnötigen Wasser-Dependencies."],
  ["Brezel", "Beim Formen die Mitte dicker lassen und die Enden dünn ausrollen. So bleibt der Infinite Loop stabil."],
];

export const CHRISTOPHUS_TIPS: Array<[string, string]> = [
  ["Schweinehaxe", "Kruste geprüft. Knackt ordentlich. Renke darf weitermachen."],
  ["Debugger-Bolognese", "Soßenkonsistenz geprüft. Kein versteckter Bug im Topf."],
  ["Merge-Conflict", "Alle Lasagne-Schichten geprüft. Kein Merge-Konflikt gefunden."],
  ["Stack Overflow", "Topfhöhe geprüft. Kein Stack Overflow. Diesmal."],
  ["Boolean-Beast", "Patty, Käse und Bun geprüft. Ergebnis: true."],
  ["Commit-Crash", "Curry geprüft. Kein Crash nach dem finalen Commit."],
  ["Stable Release", "Käsekuchen geprüft. Release ist tatsächlich stabil."],
  ["Dark Mode Deluxe", "Schokolade und Kirschen geprüft. Dark Mode funktioniert."],
  ["Dark Mode", "Schokoladenlevel geprüft. Dark genug."],
  ["Runtime Error", "Brownie-Kern geprüft. Kein Runtime Error, nur Schokolade."],
  ["Promise-All", "Alle Pancakes geprüft. Promise erfolgreich aufgelöst."],
  ["While-Schleife", "Wrap geschlossen. Keine Endlosschleife entdeckt."],
  ["Not Found", "Kekse gefunden. Der 404-Fehler tritt vermutlich erst nach dem Essen auf."],

  ["Server-Load", "Braten geprüft. Server Load hoch, Fleisch trotzdem stabil."],
  ["Bugfix-Rahm", "Pilze geprüft. Bug behoben, Rahm läuft."],
  ["Compile-Kruste", "Kruste kompiliert. Keine Syntaxfehler im Brot."],
  ["Syntax-Garden", "Rosmarin geprüft. Syntax Garden erfolgreich gebaut."],
  ["Sweet Commit", "Apfelstruktur geprüft. Commit kann gemergt werden."],

  ["Stream-Buffer", "Lachs geprüft. Garzustand sauber, Stream läuft nicht über."],
  ["Clean-Code-Kruste", "Kabeljau geprüft. Clean Code und sauberer Garpunkt."],
  ["Garnelenpfanne", "Garnelen geprüft. Hotfix kurz, heiß und erfolgreich."],
  ["Async-Await", "Risotto geprüft. Jede Portion Brühe wurde korrekt awaited."],
  ["Green Merge", "Gemüse geprüft. Farbe vorhanden. Green Merge bestätigt."],
  ["Open Source", "Kichererbsen-Curry geprüft. Dependencies schmecken kompatibel."],
  ["Long-Term-Support", "Bauernbrot geprüft. Dieser Build hat LTS verdient."],
  ["Pull Request", "Knoblauchbrot geprüft. Pull Request genehmigt."],
  ["Fresh Release", "Zitronenkuchen geprüft. Release tatsächlich frisch."],
  ["Layer Stack", "Tiramisu-Schichten nachgezählt. Stack vollständig."],

  ["Nested Loop", "Gurke steckt in der Roulade, nicht im Dessert. Datenstruktur korrekt."],
  ["Wrapper Function", "Käse befindet sich noch im Cordon Bleu. Wrapper funktioniert."],
  ["Ofengemüse", "Gemüsegrößen geprüft. Sehr ordentlich geschnitten. Verdächtig ordentlich."],
  ["Legacy Code", "Linseneintopf geprüft. Legacy, aber immer noch produktionsfähig."],
  ["Layered Stack", "Kartoffelschichten geprüft. Stack sauber aufgebaut."],
  ["Stable Branch", "Roggenbrot geprüft. Branch stabil, Kruste ebenfalls."],
  ["Hot Reload", "Käsebrötchen geprüft. Hot Reload sichtbar und essbar."],
  ["Golden Release", "Käsekuchen geprüft. Golden Release bestanden."],
  ["Recursive Crunch", "Streusel geprüft. Rekursion endet mit Crunch."],
  ["Dark Theme", "Mousse geprüft. Dark Theme ohne Darstellungsfehler."],

  ["Kung Pao", "Erdnüsse, Chili und Hähnchen geprüft. Event Loop läuft ohne Fehler."],
  ["Mapo Tofu", "Tofu-Struktur geprüft. Hot Module Reload ohne Datenverlust."],
  ["Sweet & Sour", "Sweet geprüft. Sour geprüft. Boolean Balance ergibt true."],
  ["Beef & Broccoli", "Rind und Brokkoli geprüft. Verantwortlichkeiten sauber getrennt."],
  ["Dan Dan", "Nudeln und Sauce geprüft. Dependency erfolgreich injiziert."],
  ["Fried Rice", "Reis geprüft. Kein Race Condition in der Async Queue."],
  ["Wontons", "Alle Kanten geprüft. Wrapped Component vollständig geschlossen."],
  ["Frühlingsrollen", "Rollen geprüft. Füllung wurde erfolgreich lazy geladen."],
  ["Char Siu", "Glasur geprüft. Red Build ist ausnahmsweise kein Fehler."],
  ["Gebratene Eiernudeln", "Nudeln und Gemüse geprüft. Merge Request akzeptiert."],

  ["Cannabis-Brownies", "Malte, du Schlingel – das ist aber nichts für Kinder."],

  ["Caesar-Salat", "Salat, Croutons und selbstgemachtes Dressing geprüft. Interface ist sauber."],
  ["Griechischer Salat", "Feta, Olive und Oregano geprüft. Stable API liefert korrekt."],
  ["Quinoa-Avocado", "Quinoa und Avocado geprüft. Green Build tatsächlich grün."],
  ["Ziegenkäse-Salat", "Honig und Senf geprüft. Sweet-Sour Merge ohne Konflikt."],
  ["Gurkensalat", "Gurke, Sesam und Dressing geprüft. Runtime angenehm kühl."],
  ["Couscous-Salat", "Couscous und Tahini-Dressing vollständig geladen. Lazy Load beendet."],
  ["Kartoffelsalat", "Kartoffeln geprüft. Legacy Refactor funktioniert sogar ohne Mayo."],
  ["Rote-Bete-Feta", "Rote Bete und Feta geprüft. Red Branch darf ausnahmsweise bestehen bleiben."],
  ["Kichererbsen-Salat", "Dependencies geprüft. Kichererbsen, Gemüse und Dressing kompatibel."],
  ["Pasta-Pesto-Salat", "Pesto selbst gebaut. Kein Fertigglas im Dependency Tree gefunden."],


  ["Bauernbrot", "Kruste geprüft. Stable Branch erfolgreich gebacken."],
  ["Laugenbrötchen", "Alle acht Brötchen geprüft. Backend Batch vollständig verarbeitet."],
  ["Focaccia", "Rosmarin, Olivenöl und Salz geprüft. Olive Commit akzeptiert."],
  ["Zwiebelbrot", "Zwiebel-Layer geprüft. Architecture ohne Konflikte."],
  ["Knoblauch-Kräuter-Baguette", "Garlic Patch geprüft. Geschmackstest bestanden."],
  ["Vollkornbrötchen", "Kerne und Kruste geprüft. Production Build erfolgreich."],
  ["Ciabatta", "Porung geprüft. Async Fermentation wurde korrekt resolved."],
  ["Käse-Schinken-Hörnchen", "Füllung geprüft. Wrapped Component bleibt geschlossen."],
  ["Pizza Bianca", "Mozzarella und Rosmarin geprüft. White Theme läuft stabil."],
  ["Brezel", "Knoten geprüft. Infinite Loop ohne Endlosschleife."],
];

const SAFE_MASTER_FALLBACKS = {
  fish: "Fisch nicht zu lange garen – lieber saftig servieren als trocken debuggen.",
  meat: "Fleisch zuerst kräftig anbraten und danach mit Ruhe fertig garen.",
  vegetarian: "Gemüse gleichmäßig schneiden und nicht länger garen als nötig.",
  chinese: "Wok richtig heiß werden lassen und lieber portionsweise arbeiten.",
  bread: "Teig braucht Zeit. Gehzeit lässt sich nicht erfolgreich überspringen.",
  sweet: "Bei Desserts lieber sauber arbeiten und danach genug Zeit zum Kühlen lassen.",
  soup: "Langsam köcheln lassen und erst ganz am Ende final abschmecken.",
  general: "Erst vollständig lesen, dann kochen – Debugging schmeckt rückwärts nicht besser.",
};

const SAFE_CHRISTOPHUS_FALLBACKS = {
  fish: "Fischgericht geprüft. Garzeit plausibel. Keine falsche Art erfunden.",
  meat: "Fleischgericht geprüft. Ablauf logisch und vollständig.",
  vegetarian: "Gemüse und Ablauf geprüft. Keine Exception gefunden.",
  chinese: "Wok-Ablauf geprüft. Reihenfolge sieht korrekt aus.",
  bread: "Teig, Gehzeit und Backphase geprüft. Build sieht stabil aus.",
  sweet: "Dessert geprüft. Schichten und Reihenfolge stimmen.",
  soup: "Topf geprüft. Kein Overflow und keine fehlende Dependency.",
  general: "Rezept geprüft. Kein offensichtlicher Bug gefunden. Das macht mich fast misstrauisch.",
};

function findSpecific(
  title: string,
  entries: Array<[string, string]>,
) {
  return entries.find(([key]) =>
    title.toLowerCase().includes(key.toLowerCase()),
  )?.[1];
}

function detectGroup(
  title: string,
  category: string,
  tags?: string | null,
) {
  const text = `${title} ${category} ${tags ?? ""}`.toLowerCase();

  if (/chinesisch|wok|sichuan|wonton|kung pao|char siu|dan dan/.test(text)) {
    return "chinese";
  }

  if (/lachs|kabeljau|fisch|garnele|garnelen|meeresfr/.test(text)) {
    return "fish";
  }

  if (/brot|brötchen|broetchen|focaccia|baguette|hefe|backstube/.test(text)) {
    return "bread";
  }

  if (/kuchen|torte|dessert|brownie|keks|cookie|tiramisu|mousse|crumble|pancake|schokolade|süß|suess/.test(text)) {
    return "sweet";
  }

  if (/vegetarisch|vegan|gemüse|gemuese|linsen|kichererb|risotto|pilz|tofu/.test(text)) {
    return "vegetarian";
  }

  if (/suppe|eintopf/.test(text)) {
    return "soup";
  }

  if (/rind|schwein|hähnchen|haehnchen|fleisch|braten|roulade|burger/.test(text)) {
    return "meat";
  }

  return "general";
}

export function getMasterTip(
  title: string,
  category: string,
  tags?: string | null,
) {
  const specific = findSpecific(title, MASTER_TIPS);

  if (specific) return specific;

  const group = detectGroup(title, category, tags);
  return SAFE_MASTER_FALLBACKS[group];
}

export function getChristophusTip(
  title: string,
  category: string,
  tags?: string | null,
) {
  const specific = findSpecific(title, CHRISTOPHUS_TIPS);

  if (specific) return specific;

  const group = detectGroup(title, category, tags);
  return SAFE_CHRISTOPHUS_FALLBACKS[group];
}
