function Switch({ label, checked, changeChecked }) {
  return (
    <label className="min-w-fit flex items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={changeChecked}
          className="sr-only"
        />
        <div
          className={`box block h-6 w-10 rounded-full ${
            checked ? "bg-primary-700" : "bg-black"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
            checked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
      {label && <div className="text-base text-black ml-1.5">Enabled App</div>}
    </label>
  );
}

export default Switch;
