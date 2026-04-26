function FormTextArea(props: any) {
  const {
    validation,
    invalid = "false",
    dirty = "false",
    onTurnyDirty,
    ...textareaProps
  } = props;

  function handleBlur() {
    onTurnyDirty(props.name);
  }

  return (
    <textarea
      {...textareaProps}
      onBlur={handleBlur}
      data-invalid={invalid}
      data-dirty={dirty}
    />
  );
}

export default FormTextArea;
