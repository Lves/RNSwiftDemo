//
//  RNBridge.m
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/21.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

#import "RNBridge.h"
#import "RNSwiftDemo-Swift.h"
@implementation RNBridge
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(routeBackToNative){
    [RouterTool routeBackToNative];
}
@end
