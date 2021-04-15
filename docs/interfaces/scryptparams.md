[scrypt-pbkdf - v1.0.4](../API.md) / ScryptParams

# Interface: ScryptParams

scrypt configuration parameters

## Table of contents

### Properties

- [N](scryptparams.md#n)
- [p](scryptparams.md#p)
- [r](scryptparams.md#r)

## Properties

### N

• **N**: *number*

CPU/memory cost parameter - Must be a power of 2 (e.g. 1024)

Defined in: scrypt.ts:9

___

### p

• **p**: *number*

Parallelization parameter; a positive integer satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen

Defined in: scrypt.ts:13

___

### r

• **r**: *number*

The blocksize parameter, which fine-tunes sequential memory read size and performance. 8 is commonly used.

Defined in: scrypt.ts:11