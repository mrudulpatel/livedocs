import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {

  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    onClickHandler && onClickHandler(type);
  };

  return (
    <Select
      value={userType}
      onValueChange={(type: UserType) => accessChangeHandler(type)}
    >
      <SelectTrigger className="shad-select">
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="border-none bg-dark-200">
        <SelectItem value="editor" className="shad-select-item">can edit</SelectItem>
        <SelectItem value="viewer" className="shad-select-item">can view</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserTypeSelector;
