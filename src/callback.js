const calling =(func1, message, func2) => {
    func1(message);
    func2();
}

const firstAction = (message) => {
    console.log(message);
}


const secondAction = () => {
    console.log("Third action");
}


calling(firstAction, "This is a callback", secondAction);