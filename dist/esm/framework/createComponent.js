import { ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
export function createComponent(instructions) {
    var injector = getInjector(instructions);
    return instructions.vcRef.createComponent(injector.get(ComponentFactoryResolver).resolveComponentFactory(instructions.component), instructions.vcRef.length, injector, instructions.projectableNodes);
}
function getInjector(instructions) {
    var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
    return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ?
        ReflectiveInjector.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
}
// export function createComponent(cfr: ComponentFactoryResolver,
//                                         type: any,
//                                         vcr: ViewContainerRef,
//                                         bindings: ResolvedReflectiveProvider[],
//                                         projectableNodes?: any[][]): ComponentRef<any> {
//   return vcr.createComponent(
//     cfr.resolveComponentFactory(type),
//     vcr.length,
//     getInjector(vcr, bindings),
//     projectableNodes
//   );
// }
//
// function getInjector(viewContainer: ViewContainerRef, bindings: ResolvedReflectiveProvider[]) {
//   const ctxInjector = viewContainer.parentInjector;
//   return Array.isArray(bindings) && bindings.length > 0 ?
//     ReflectiveInjector.fromResolvedProviders(bindings, ctxInjector) : ctxInjector;
//
// }
//# sourceMappingURL=createComponent.js.map