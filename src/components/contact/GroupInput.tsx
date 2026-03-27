function GroupInput({ label, id, type, placeholder, required, onChange, value }: { label: string, id: string, type: string, placeholder: string, required?: boolean, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, value?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex flex-row gap-1 text-xs text-text-secondary font-mono uppercase tracking-wide"
      >
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        className="w-full bg-bg-card border border-border-input rounded-lg px-3 py-2 text-sm text-text-primary font-body outline-none
        focus:ring-1 focus:ring-sz focus:border-transparent transition-colors duration-300"
      />
    </div>
  );
}


function GroupTextarea({ label, id, placeholder, required, onChange, value }: { label: string, id: string, placeholder: string, required?: boolean, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, value?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex flex-row gap-1 text-xs text-text-secondary font-mono uppercase tracking-wide"
      >
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
        className="w-full bg-bg-card border border-border-input rounded-lg px-3 py-2 text-sm text-text-primary font-body outline-none h-28 resize-none
        focus:ring-1 focus:ring-sz focus:border-transparent transition-colors duration-300"
      />
    </div>
  );
}


export {GroupInput, GroupTextarea};