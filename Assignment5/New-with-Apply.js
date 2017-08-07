function construct(Class) {
    return new (Class.bind.apply(Class, arguments))();
}
