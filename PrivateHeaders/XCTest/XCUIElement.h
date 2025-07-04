//
//     Generated by class-dump 3.5 (64 bit).
//
//     class-dump is Copyright (C) 1997-1998, 2000-2001, 2004-2013 by Steve Nygard.
//

#import <XCTest/XCUIElement.h>

@class NSString, XCElementSnapshot, XCUIApplication, XCUICoordinate, XCUIElementQuery;

@interface XCUIElement () {
    BOOL _safeQueryResolutionEnabled;
    XCUIElementQuery *_query;
    XCElementSnapshot *_lastSnapshot;
}

@property BOOL safeQueryResolutionEnabled; // @synthesize safeQueryResolutionEnabled=_safeQueryResolutionEnabled;
@property(retain) XCElementSnapshot *lastSnapshot; // @synthesize lastSnapshot=_lastSnapshot;
@property(readonly) XCUIElementQuery *query; // @synthesize query=_query;
#if !TARGET_OS_TV
@property(readonly, nonatomic) UIInterfaceOrientation interfaceOrientation;
#endif
@property(readonly, copy) XCUICoordinate *hitPointCoordinate;
@property(readonly) BOOL isTopLevelTouchBarElement;
@property(readonly) BOOL isTouchBarElement;
@property(readonly) BOOL hasKeyboardFocus;
@property(readonly, nonatomic) XCUIApplication *application;
// Added since Xcode 11.0 (beta)
@property(readonly, copy) XCUIElement *excludingNonModalElements;
// Added since Xcode 11.0 (GM)
@property(readonly, copy) XCUIElement *includingNonModalElements;

- (id)initWithElementQuery:(id)arg1;

- (unsigned long long)traits;

- (void)resolveHandleUIInterruption:(BOOL)arg1;

// !!! These both methods are deprecated since Xcode 11.0
// before 10.2
- (void)resolve;

// XCode 10.2 .. Xcode 11.0
- (_Bool)resolve:(id *)arg1;

- (BOOL)waitForExistenceWithTimeout:(double)arg1;

- (BOOL)_waitForExistenceWithTimeout:(double)arg1;

- (BOOL)evaluatePredicateForExpectation:(id)arg1 debugMessage:(id *)arg2;

- (void)_swipe:(unsigned long long)arg1;

- (void)_tapWithNumberOfTaps:(unsigned long long)arg1 numberOfTouches:(unsigned long long)arg2 activityTitle:(id)arg3;

- (id)_highestNonWindowAncestorOfElement:(id)arg1 notSharedWithElement:(id)arg2;

- (id)_pointsInFrame:(CGRect)arg1 numberOfTouches:(unsigned long long)arg2;

- (CGPoint)_hitPointByAttemptingToScrollToVisibleSnapshot:(id)arg1;

- (void)forcePress;

- (void)tapWithNumberOfTaps:(unsigned long long)arg1 numberOfTouches:(unsigned long long)arg2;

- (void)twoFingerTap;

- (void)doubleTap;

- (void)tap;

- (void)pressForDuration:(double)arg1 thenDragToElement:(id)arg2;

- (void)pressForDuration:(double)arg1;

// Available since Xcode 11.0
- (_Bool)resolveOrRaiseTestFailure:(_Bool)arg1 error:(id *)arg2;

- (void)resolveOrRaiseTestFailure;

// Available since Xcode 10.0
- (id)screenshot;

// Since Xcode 11.4
- (void)swipeRightWithVelocity:(double)arg1;

- (void)swipeLeftWithVelocity:(double)arg1;

- (void)swipeDownWithVelocity:(double)arg1;

- (void)swipeUpWithVelocity:(double)arg1;

@end
