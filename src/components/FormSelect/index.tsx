import Select from "react-select";

function FormSelect(props: any) {
  const {
    className,
    validation,
    invalid = "false",
    dirty = "false",
    onTurnyDirty,
    ...selectProps
  } = props;

  function handleBlur() {
    onTurnyDirty(props.name);
  }

  return (
    <div data-invalid={invalid} data-dirty={dirty} className={className}>
      <Select {...selectProps} onBlur={handleBlur} />
    </div>
  );
}

export default FormSelect;
