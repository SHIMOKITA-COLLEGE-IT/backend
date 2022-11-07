import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoCoCreateWithoutPhotosInput } from './co-co-create-without-photos.input';
import { Type } from 'class-transformer';
import { CoCoCreateOrConnectWithoutPhotosInput } from './co-co-create-or-connect-without-photos.input';
import { CoCoWhereUniqueInput } from './co-co-where-unique.input';

@InputType()
export class CoCoUncheckedCreateNestedManyWithoutPhotosInput {

    @Field(() => [CoCoCreateWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoCreateWithoutPhotosInput)
    create?: Array<CoCoCreateWithoutPhotosInput>;

    @Field(() => [CoCoCreateOrConnectWithoutPhotosInput], {nullable:true})
    @Type(() => CoCoCreateOrConnectWithoutPhotosInput)
    connectOrCreate?: Array<CoCoCreateOrConnectWithoutPhotosInput>;

    @Field(() => [CoCoWhereUniqueInput], {nullable:true})
    @Type(() => CoCoWhereUniqueInput)
    connect?: Array<CoCoWhereUniqueInput>;
}
