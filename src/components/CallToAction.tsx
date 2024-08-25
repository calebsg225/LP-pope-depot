interface CallToActionProps {
  text: string
}

const CallToAction = ({text}: CallToActionProps) => {
  return (
    <button className="call-to-action">{text}</button>
  );
}

export default CallToAction;