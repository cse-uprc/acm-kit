import { __awaiter, __generator } from "tslib";
import { TestBed } from '@angular/core/testing';
var AbstractTestBed = /** @class */ (function () {
    function AbstractTestBed() {
    }
    AbstractTestBed.useProvider = function (moduleMetaData, provider) {
        var index = moduleMetaData.providers.findIndex(function (p) { return p.provide === provider || p.provide === provider.provide; });
        if (index >= 0) {
            moduleMetaData.providers.splice(index, 1);
        }
        moduleMetaData.providers.push(provider);
    };
    AbstractTestBed.setup = function (updateModuleMetaData) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleMetaData;
            return __generator(this, function (_a) {
                moduleMetaData = this.getModuleMetaData();
                if (updateModuleMetaData) {
                    updateModuleMetaData(moduleMetaData);
                }
                TestBed.configureTestingModule(moduleMetaData);
                return [2 /*return*/];
            });
        });
    };
    AbstractTestBed.getModuleMetaData = function () {
        return null;
    };
    return AbstractTestBed;
}());
export { AbstractTestBed };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGVzdC1iZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hY21raXQtbGliLyIsInNvdXJjZXMiOlsibGliL3Rlc3RpbmcvYWJzdHJhY3QtdGVzdC1iZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQXNCLE1BQU0sdUJBQXVCLENBQUM7QUFFcEU7SUFBQTtJQXVCQSxDQUFDO0lBdEJRLDJCQUFXLEdBQWxCLFVBQW1CLGNBQWtDLEVBQUUsUUFBYTtRQUNsRSxJQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FDOUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQXhELENBQXdELENBQ2hFLENBQUM7UUFDRixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDZCxjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFDRCxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRVkscUJBQUssR0FBbEIsVUFDRSxvQkFBbUU7Ozs7Z0JBRTdELGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDaEQsSUFBSSxvQkFBb0IsRUFBRTtvQkFDeEIsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7OztLQUNoRDtJQUNNLGlDQUFpQixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIFRlc3RNb2R1bGVNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUZXN0QmVkIHtcclxuICBzdGF0aWMgdXNlUHJvdmlkZXIobW9kdWxlTWV0YURhdGE6IFRlc3RNb2R1bGVNZXRhZGF0YSwgcHJvdmlkZXI6IGFueSkge1xyXG4gICAgY29uc3QgaW5kZXggPSBtb2R1bGVNZXRhRGF0YS5wcm92aWRlcnMuZmluZEluZGV4KFxyXG4gICAgICAocCkgPT4gcC5wcm92aWRlID09PSBwcm92aWRlciB8fCBwLnByb3ZpZGUgPT09IHByb3ZpZGVyLnByb3ZpZGVcclxuICAgICk7XHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICBtb2R1bGVNZXRhRGF0YS5wcm92aWRlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIG1vZHVsZU1ldGFEYXRhLnByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBzZXR1cChcclxuICAgIHVwZGF0ZU1vZHVsZU1ldGFEYXRhPzogKG1vZHVsZU1ldGFEYXRhOiBUZXN0TW9kdWxlTWV0YWRhdGEpID0+IHZvaWRcclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgbW9kdWxlTWV0YURhdGEgPSB0aGlzLmdldE1vZHVsZU1ldGFEYXRhKCk7XHJcbiAgICBpZiAodXBkYXRlTW9kdWxlTWV0YURhdGEpIHtcclxuICAgICAgdXBkYXRlTW9kdWxlTWV0YURhdGEobW9kdWxlTWV0YURhdGEpO1xyXG4gICAgfVxyXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKG1vZHVsZU1ldGFEYXRhKTtcclxuICB9XHJcbiAgc3RhdGljIGdldE1vZHVsZU1ldGFEYXRhKCk6IFRlc3RNb2R1bGVNZXRhZGF0YSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIl19