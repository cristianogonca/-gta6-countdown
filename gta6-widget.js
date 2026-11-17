
// Widget Scriptable: contagem regressiva GTA VI
// Ajuste a data aqui se houver novo adiamento (horário local do aparelho).
const TARGET = new Date(2026, 10, 19, 0, 0, 0);

const diff = TARGET - new Date();
const days = Math.max(0, Math.ceil(diff / 86400000));
const done = diff <= 0;

const w = new ListWidget();
const g = new LinearGradient();
g.colors = [new Color("#ff3d81"), new Color("#ff8a3d"), new Color("#3b1c6e")];
g.locations = [0, 0.45, 1];
g.startPoint = new Point(0, 0);
g.endPoint = new Point(1, 1);
w.backgroundGradient = g;
w.setPadding(14, 14, 14, 14);

const title = w.addText("GTA VI");
title.font = Font.heavySystemFont(22);
title.textColor = Color.white();

w.addSpacer();

if (done) {
  const t = w.addText("🎮 Já saiu!");
  t.font = Font.heavySystemFont(24);
  t.textColor = Color.white();
} else {
  const n = w.addText(String(days));
  n.font = Font.heavySystemFont(56);
  n.textColor = Color.white();
  n.minimumScaleFactor = 0.5;
  const l = w.addText(days === 1 ? "dia restante" : "dias restantes");
  l.font = Font.mediumSystemFont(13);
  l.textColor = new Color("#ffffff", 0.85);
}

w.addSpacer();
const d = w.addText("19 NOV 2026");
d.font = Font.semiboldSystemFont(11);
d.textColor = new Color("#ffffff", 0.8);

const next = new Date();
next.setHours(24, 0, 5, 0);
w.refreshAfterDate = next;

if (config.runsInWidget) Script.setWidget(w);
else w.presentSmall();
Script.complete();
