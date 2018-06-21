"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var tabs_service_1 = require("./tabs.service");
describe('TabsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [tabs_service_1.TabsService]
        });
    });
    it('should be created', testing_1.inject([tabs_service_1.TabsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tabs.service.spec.js.map