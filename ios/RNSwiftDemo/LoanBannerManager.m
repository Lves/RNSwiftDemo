//
//  LoanBannerManager.m
//  RNSwiftDemo
//
//  Created by lixingle on 2018/3/29.
//  Copyright © 2018年 com.lvesli. All rights reserved.
//

#import "LoanBannerManager.h"
#import "RNSwiftDemo-Swift.h"
#import <React/RCTBridgeModule.h>
//#import "RCTConvert+PropertyType.h"

@interface LoanBannerManager()<FSPagerViewDelegate,FSPagerViewDataSource>


@end


@implementation LoanBannerManager

RCT_EXPORT_MODULE(LoanBanner)
RCT_EXPORT_VIEW_PROPERTY(interitemSpacing, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(isInfinite, BOOL)
RCT_CUSTOM_VIEW_PROPERTY(itemSize, CGSize, LoanPagerView){
    LoanPagerView *pagerView = (LoanPagerView *)view;
    [pagerView setItemSize:[RCTConvert CGSize:json]];
}
RCT_EXPORT_VIEW_PROPERTY(onClickBanner, RCTBubblingEventBlock)


- (UIView *)view{
    LoanPagerView *pagerView = [[LoanPagerView alloc] initWithFrame:CGRectZero];
    [pagerView registerClass:[FSPagerViewCell class] forCellWithReuseIdentifier:@"PagerCell"];
    pagerView.delegate = self;
    pagerView.dataSource = self;
    return pagerView;
}
-(NSInteger)numberOfItemsInPagerView:(FSPagerView *)pagerView{
    return 3;
}
- (FSPagerViewCell *)pagerView:(FSPagerView *)pagerView cellForItemAtIndex:(NSInteger)index{
    FSPagerViewCell *cell = [pagerView dequeueReusableCellWithReuseIdentifier:@"PagerCell" atIndex:index];
    cell.imageView.image = [UIImage imageNamed:@"bannerImage_01"];
    return cell;
}
- (void)pagerView:(FSPagerView *)pagerView didSelectItemAtIndex:(NSInteger)index{
    LoanPagerView *loanPagerView = (LoanPagerView *)pagerView;
    loanPagerView.onClickBanner(@{@"pagerView":@0,@"index":[NSNumber numberWithInteger:index]});
}

@end
