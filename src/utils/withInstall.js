export function withInstall(comp) {
  comp.install = app => {
    const name = comp.name || comp.__name

    app.component(name, comp)
  }
  return comp
}