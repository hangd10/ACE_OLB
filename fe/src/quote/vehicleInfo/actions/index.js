export const BACK_TO_VEHICLE_INFO = "BACK_TO_VEHICLE_INFO";
export const GO_TO_ADD_DRIVER_INFO = "GO_TO_ADD_DRIVER_INFO";

export function goToDriverInfo(vehicleInfo) {
    //console.log(`goToDriverInfo ${ JSON.stringify(vehicleInfo) }`);

    return {
        type : GO_TO_ADD_DRIVER_INFO
        ,payload : vehicleInfo
    }
}