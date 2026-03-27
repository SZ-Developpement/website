function Badge({color = "#50e3c2", text, status=true}: {color?: string, text: string, status?: boolean}) {
  return (
    <div className="w-fit flex flex-row items-center justify-center gap-2 py-1.5 px-3 bg-bg-card border border-border-card rounded-full">
      {status && (
        <div className="aspect-square w-1.5 rounded-full" style={{backgroundColor: color}} />
      )}
      <p className="text-xs text-text-secondary font-mono font-medium">{text}</p>
    </div>
  );
}

export { Badge };