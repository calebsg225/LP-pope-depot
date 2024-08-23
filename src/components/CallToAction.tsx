interface CallToActionProps {
  text: string
}

const CallToAction = ({text}: CallToActionProps) => {
  return (
    <button>{text}</button>
  );
}

export default CallToAction;