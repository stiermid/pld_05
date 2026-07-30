process.stdout.write('BiletAZ operator panelinə xoş gəldiniz, adınız nədir?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Operator: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('Növbə bağlandı, sabah görüşərik\n');
});
