function FormInput(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnyDirty,
    ...inputProps
  } = props;

  console.log("FormInput props for", props.name, ":", { invalid, dirty });

  function handleBlur() {
    onTurnyDirty(props.name);
  }

  return (
    <input
      {...inputProps}
      onBlur={handleBlur}
      data-invalid={invalid}
      data-dirty={dirty}
    />
  );
}

export default FormInput;
