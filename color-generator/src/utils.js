const handleConverionOfColor = (param) => {
      const hexValue = param.toString(16);
      return hexValue.length == 1 ? "0" + hexValue : hexValue;
}

const rgbToHex = (red, green, blue) => {
     return "#" + handleConverionOfColor(red) + handleConverionOfColor(green) + handleConverionOfColor(blue);
}

export default rgbToHex;