function Checkbox({ label, checked, changeChecked }) {
  return (
    <label className="flex items-center gap-2">
      <div
        className={`h-[18px] min-w-[18px] p-[3px] rounded-full border-[1px] border-primary-700 animation cursor-pointer ${
          checked ? "border-primary-700" : ""
        }`}
        onClick={changeChecked}
      >
        {checked && (
          <div className="h-full w-full bg-primary-700 rounded-full" />
        )}
      </div>
      {label && (
        <div className="text-base font-medium text-[#ACACAC]">{label}</div>
      )}
    </label>
  );
}

export default Checkbox;
